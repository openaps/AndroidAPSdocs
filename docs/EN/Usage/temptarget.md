# Temp-Targets

## What are Temp-Targets and where can I set and configure them?
With “Temp-Targets” (or short TT), you can change your blood glucose target for a certain time period. As these are mostly needed for activity, hypo (treatment carbs) or eating soon, you can configure default ones. To configure these one, you can go to the menu in the right corner on top and go to Preferences-> Other-> Default Temp-Targets.
To set “Default-Temp-Targets”, you can press long on your target in the right corner on the top in the overview-tab or in the orange “Carbs” button. To set a “Custom Temp-Target”, you can also do it by long pressing you target or in the “Actions”-tab.

## Hypo Temp-Target

This can be considered as the most important Temp-Target. There are several reasons for it:
1.	Realizing you will go low: Usually, the Loop should handle it, but sometimes you can see better in advance than the loop, so the loop can react faster when it targets a higher blood glucose value.
2.	When you eat hypo treatments carbs, your blood glucose will rise very fast. The loop will correct against the rising or even give SMBs if enabled. A "Hypo Temp-Target" can prevent that. 
3.	(advanced, objective 8): You can enable “High Temp-Targets raises sensitivity” for Temp-Targets of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, so AndroidAPS is more sensitive.
4.	(advanced, objective 8): You can deactivate “SMB with high temp target”, so that even if you have COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active, AndroidAPS won’t give SMBs while high temp targets are active. 

Note: if you enter carbs with the carb button and your blood glucose is less then 72mg/dl or 4mmol/l, Hypo TT is automatically enabled.


## Activity Temp-Target

Before and during activity, you might want to have a higher target to prevent getting low. To simplify setting the Temp-Target, you can configure a default "Activity Temp-Target".

Advanced, objective 8:
The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. Then AndroidAPS is more sensitive. Some people do instead a profile switch before/while activity TT, but everbody is different.
If “SMB with high Temp-Target” is deactivated, AndroidAPS won't use SMBs, even with COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active.


## Eating soon Temp-Target

If you know, that you want to eat soon, you can enable this Temp-Target, so there is already more IOB before eating. Especially for those who don’t do prebolusing, it might be a good alternative to already get the blood glucose to a lower target. You can read more about the "Eating soon mode" in the article ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) or [here](https://diyps.org/tag/eating-soon-mode/).

Advanced, objective 8:
If you use OpenAPS SMB and have “Low temptarget lowers sensitivity”, AndroidAPS works a little bit more aggressive. Requirement is a Temp-Target less than 100mg/dl or 5.5mmol/l for this option.

## Custom Temp-Target

Sometimes, you just want to have a temp target other than the default ones. You can set one by long pressing on the target (range) on the right corner in overview or in the “Action”-Tab.
