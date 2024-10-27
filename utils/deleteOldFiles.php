<?php
chdir('..');
$sourceDir = realpath(getcwd().'/docs/EN');
$langDirFromRoot = 'docs/CROWDIN';
$langAbsDir = realpath(getcwd().'/'.$langDirFromRoot);
$langs = scandir($langAbsDir);

$sourceFiles = glob("$sourceDir/{,*/,*/*/,*/*/*/}*.md", GLOB_BRACE);
array_walk($sourceFiles, function (&$_item) use($sourceDir) { $_item = str_replace($sourceDir, '', $_item);});

echo "Source language: ".count($sourceFiles)." files\n";

$filesToRemove = [];
foreach($langs as $lang) {
	$langDir = "$langAbsDir/$lang";
	if(file_exists("$langDir/index.md")) {
		$langFiles = glob("$langDir/{,*/,*/*/,*/*/*/}*.md", GLOB_BRACE);
		array_walk($langFiles, function (&$_item) use($langDir) { $_item = str_replace($langDir, '', $_item);});
		$oldFiles = array_diff($langFiles, $sourceFiles);
		echo "Lang $lang: ".count($langFiles)." files (".count($oldFiles)." old files, ".
			(count($langFiles) - count($oldFiles))." files to keep)\n";

		array_walk($oldFiles, function (&$_item) use($lang, $langDirFromRoot) { $_item = "$langDirFromRoot/$lang$_item";});
		$filesToRemove = array_merge($filesToRemove, $oldFiles);
	}
}
foreach($filesToRemove as $fileToRemove) {
	exec("git rm $fileToRemove");
}
echo count($filesToRemove)." files marked as removed in Git - manual commit required\n";