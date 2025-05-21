# 自定义表盘参考文档

本页面向新表盘设计师提供参考。 本文将列出创建或制作动态表盘时可用的所有关键词和功能。

- 自定义表盘V2版本（Wear apk 3.3.0及以上）的新功能和按键详见[此处](#cwf-reference-new-v2-features)

## 自定义表盘格式

自定义表盘是为AAPS设计的开放格式，关联至手表端新版"AAPS(自定义)"表盘。

表盘文件为简易zip压缩包，但需包含以下文件才能被识别为表盘文件：

- 一个名为CustomWatchface的图像文件（可为位图`CustomWatchface.jpg`、`CustomWatchface.png`或矢量图`CustomWatchface.svg`）。 该文件是点击"加载表盘"按钮时用于选择表盘的小图标，同时也是AAPS Wear插件中显示的图像。
- 一个名为`CustomWatchface.json`的文件（参见下文[JSON结构](#cwf-reference-json-structure)）。 该核心文件包含设计表盘所需的全部信息。 该json文件必须格式正确（在文本编辑器中手动编辑时最易出错，缺失或多一个逗号都会破坏json格式）。 该JSON文件必须包含带非空`"name"`键的`"metadata"`区块。 这将作为自定义表盘的名称（参见下文[元数据设置](#cwf-reference-metadata-settings)）
- 该zip文件应尽可能小（建议小于500KB）。 文件过大将被拦截，无法传输至手表。

zip文件还可包含额外资源文件：

- 表盘标准视图使用的硬编码图像文件名（如`Background`、`CoverChart`...参见下文[硬编码资源文件列表](#cwf-reference-list-of-hardcoded-resource-files)）。 所有文件均可采用`jpg`、`png`或`svg`格式。 但多数情况下需使用支持透明度的`png`或`svg`格式（jpg体积虽小于png但不支持透明）。 请注意，svg文件（矢量格式）通常能实现最佳画质与最小体积的结合。
- 可自由命名的附加资源文件。 这些附加文件可为图像文件或字体文件（字体支持`ttf`和`otf`格式）。 请注意，这些附加文件的`文件名`（不含扩展名）将作为JSON文件中的keyValue，用于指定其使用位置或时机。
  - 图像文件常用作文本视图背景或动态动画素材（如电量从0%到100%的变化效果）
  - 字体文件支持在表盘中使用定制字体

(cwf-reference-json-structure)=

## JSON 结构

JSON文件可通过记事本（或notepad++）文本编辑器编辑（推荐能识别JSON并支持彩色格式的notepad++）

- 文件包含字符串键`"string_key":`及键值，键值可为`"key value"`类字符串、整数、`true`/`false`布尔值或数据块。
- 各键值间用逗号`,`分隔
- 数据块以`{`开始，以`}`结束
- json文件整体为数据块，以`{`起始、`}`结束，内部所有嵌套块均通过`"key"`关联（键名在块内须唯一）。
- 为提升json文件可读性，通常采用缩进格式（每个新键换行显示，每个新块向右缩进4个空格字符）

(cwf-reference-metadata-settings)=

### 元数据设置

该区块是json文件中首个且必须包含的区块。 该区块包含与此表盘相关的所有信息，如名称、作者、创建或更新日期、作者版本或插件版本。

以下是元数据区块示例：

```json
"metadata": {
    "name": "默认表盘",
    "author": "我的名字", 
    "created_at": "2023年10月7日",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "默认表盘模板，点击'导出表盘'按钮可生成"
},
```

请注意，日期中的`/`是特殊字符，需在前添加转义符`\`才能被json正确识别。

部分json文件中可能含额外键`"filename"`，该键会在自定义表盘加载至AAPS时自动生成或更新（用于在导出文件夹向用户显示zip文件名），因此可从元数据区块中删除此键。

(cwf-reference-general-parameter-settings)=

### 常规参数设置

在首个元数据区块后，需设置常规参数（参见下文[常规参数列表](#cwf-reference-list-of-general-parameters)），用于配置图表颜色（碳水、大剂量、血糖值等）以及范围内/高/低血糖的默认颜色（血糖值及箭头的预设颜色）。

以下是常规参数示例：

```json
"highColor": "#FFFF00",
"midColor": "#00FF00",
"lowColor": "#FF0000",
"lowBatColor": "#E53935",
"carbColor": "#FB8C00",
"basalBackgroundColor": "#0000FF",
"basalCenterColor": "#64B5F6",
"gridColor": "#FFFFFF",
"pointSize": 2,
"enableSecond": true,
```
(cwf-reference-imageview-settings)=

### ImageView 设置

自定义图像可通过匹配表盘布局中各ImageView的正确文件名进行调整，json区块仅用于定义位置、尺寸、可见性，并可选择性调整颜色：

以下是秒针(second_hand)的图像区块示例（此例zip未包含图像文件，将使用默认秒针图像但应用自定义颜色）：

```json
"second_hand": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "color": "#BC906A"
}
```
要使秒针(second_hand)显示默认血糖颜色（低/中/高范围），只需将最后一行键值改为`bgColor`即可。

```json
    "color": "bgColor"
```

(cwf-reference-textview-settings)=

### TextView 设置

文本视图(TexView)参数比图像视图更丰富：可调整旋转角度（整数值/度）、字号（整数值/像素）、对齐方式（默认居中，可选左/右对齐），并支持设置字体、字型、文字颜色及文本视图背景色。

```json
"basalRate": {
    "width": 91,
    "height": 32,
    "topmargin": 133,
    "leftmargin": 249,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
注意：若需隐藏表盘中的某个视图，除将`"visibility"`设为`"gone"`外，还需将其尺寸和位置调整至可视区域外，例如：

```json
"second": {
    "width": 0,
    "height": 0,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "gone",
    "textsize": 46,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
若尺寸和位置位于可视区域内，表盘刷新时可能出现隐藏值的闪烁现象。

若需自定义文本视图背景图像，可使用键`"background":`并将zip内图像文件名设为键值，亦可直接通过`"color:"`键更改背景色。

```json
"background": "fileName"
```

另有4个专用文本视图（命名为freetext1至freetext4），含特定参数`"textvalue":`，可用于设置标签等固定文本。

(cwf-reference-chartview-settings)=

### ChartView 设置

图表视图是特殊视图，可共享部分图像视图或文本视图的参数...

该视图的标准设置非常简单：

```json
"chart": {
    "width": 400,
    "height": 170,
    "topmargin": 230,
    "leftmargin": 0,
    "visibility": "visible"
},
```
图表视图可添加的两个额外参数：通过`"color"`键设置背景色（默认透明），或通过`"background"`键设置背景图像。

(cwf-reference-how-to-build-watchface)=

## 如何构建/设计您的首个表盘

### 所需工具

- 文本编辑器：建议使用NotePad++（或同类工具），作为简易文本编辑器，其优势在于可显示带颜色标记的格式化文本，便于错误排查。 任何简易文本编辑器均可胜任。 因需调整json信息。
- 图像编辑器（位图/矢量图）
  - 如果您使用位图
    - 图像编辑器需支持透明通道处理（背景上层图像均需此功能），若使用位图则需兼容png格式。
    - 背景图像可采用jpg格式（体积较png更小）。
    - 图像编辑器需支持以像素为单位测量图形对象（如简单方形）的坐标参数（顶部、左侧、宽度、高度）。
    - 图像编辑器需支持以十六进制RRVVBB代码显示颜色。
    - 图像编辑器需能将图像调整为400px×400px分辨率（此分辨率至关重要）。
  - 如果您使用矢量图
    - 矢量图像应导出为svg格式。

### 获取模板以避免从零开始。

设计首个表盘时，最佳方案是从默认表盘开始（可确保获得含所有正确排序视图的最新版本）。

- 点击Wear插件中的"导出模板"按钮，即可在AAPS/exports文件夹获取zip文件。
- 请注意：需连接手表至AAPS才能显示自定义表盘按钮（调试、测试及调整自定义表盘时亦需保持连接）。

默认表盘极为简洁，zip文件仅包含以下两个文件：

- CustomWatchface.png（用于表盘选择的默认表盘预览图）
- CustomWatchface.json

### 在电脑中整理您的文件

最便捷的操作方式是将手机连接电脑，并专注于两个特定文件夹：

- 在专用文件夹（内含json文件、位图/矢量图、字体等所有素材）中打开资源管理器，并将CustomWatchface.zip文件置于其中。
- 同时打开另一个资源管理器（或调整导航树）以访问Phone/AAPS/exports文件夹。

如此操作极为简便：每次用文本编辑器修改json文件或用图像编辑器（位图/矢量图）调整图像后，仅需：

1. 在各应用程序中保存修改内容。
2. 将所有文件拖放至CustomWatchface.zip文件中。
3. 将CustomWatchface.zip拖放至手机的AAPS/exports文件夹。
4. 将CustomWatchface发送至手表以查看效果。

### 初始化表盘自定义设置

首先需定义表盘名称（便于测试时快速选择），并开始调整json文件开头的元数据键值。

随后需设定要显示的信息，即确定哪些视图应显示或隐藏。

- 是否启用秒针显示？
- 需设计模拟表盘、数字表盘或两者兼具？

现在您可通过修改json文件中的`"visibility"`键值来设定每个视图为`"visible"`（显示）或`"gone"`（隐藏）。

您还可先初步调整顶部、左侧边距及宽高数值来布局表盘（这些数值后续将通过图像编辑器精确校准）。

注：所有设计均在**400px×400px矩形框**内完成。 因此所有元素均需在此尺寸范围内采用绝对坐标定位。

设计首个表盘时需注意：所有元素按从底层到顶层的顺序堆叠排列，因此每个视图（ImageView或TextView）都可能遮挡后方内容...



![CustomWatchface layers](../images/CustomWatchface_1.jpg)



json文件中所有视图均按从底层到顶层的顺序排列（便于您记忆各视图的遮挡关系...）

若首次设计或调整自定义表盘，建议从简单操作入手：更改部分视图的可见性、添加专属背景图（无需修改json文件）...

### 管理颜色

json文件中包含多个颜色设定键：视图的`"color"`、`"fontColor"`，以及`"highColor"`、`"midColor"`、`"lowColor"`等（详见[通用参数列表](#cwf-reference-list-of-general-parameters)）。

颜色通过以`#`开头的文本字段指定，后接十六进制格式的RRGGBB（红绿蓝）值：

- `"#FFFFFF"`为白色，`"#000000"`为黑色，`"#FF0000"`为红色...

还可添加2位Alpha通道值来设定透明度（AARRGGBB格式）：

- `"#00000000"`表示完全透明，`"#FF000000"`表示完全不透明（因此`"#FF000000"`等同于`"#000000"`）

您还可使用特定键值`"bgColor"`，根据血糖值自动调用通用参数中设定的`"highColor"`、`"midColor"`、`"lowColor"`：

- `"fontColor": "bgColor",` 将根据血糖值自动设置视图的字体颜色
- 注意：`sgv`（血糖值）和`direction`（趋势箭头）视图会自动应用通用参数中的血糖颜色设置（若需为这两个视图设定不同颜色，需使用进阶的[dynData](#cwf-reference-dyndata-feature)功能配合单阶颜色...）

有关ImageView及`"color":`键的详细信息，请参阅下文[调整图像颜色](#cwf-reference-tune-image-color)专章。

### 嵌入硬编码图像

调整表盘最便捷的方式是在zip文件中包含特定命名的图像（参见[硬编码资源文件列表](#cwf-reference-list-of-hardcoded-resource-files)）

- 图像需采用`.jpg`、`.png`或`.svg`格式。 但需注意：jpg格式不支持透明度，因此仅适用于背景图层。 所有中间图层（如cover_chart、cover_plate、表针）请使用`.png`或`.svg`格式图像

- 若您使用矢量图像编辑器（如Illustrator），建议优先选择`.svg`格式，该格式能生成体积小巧的文本文件且画质最佳。
- 务必确保使用精确的文件名（含大小写敏感）。

若需定制背景图，只需在zip文件中添加名为`Background.jpg`的文件（无需修改其他内容）。 将zip文件发送至手表并查看效果！

若需定制模拟表盘的时针、分针或秒针，只需添加`HourHand.png`（或`HourHand.svg`）、`MinuteHand.png`及`SecondHand.png`文件。

- 这些图像将自动绕其中心点旋转，因此图像需设置为00:00:00状态（若设计"全屏"模拟表盘，请使用400×400像素尺寸并定位在top 0 left 0位置）。

您还可在[硬编码资源文件列表](#cwf-reference-list-of-hardcoded-resource-files)中注意到：每个图像视图均对应两个附加的硬编码文件名`High`和`Low`（例如可在zip文件中添加名为`BackgroundHigh.jpg`和`BackgroundLow.jpg`的其他图像）。 图像将根据您的血糖水平（正常范围、高血糖或低血糖）自动切换。 参见AIMICO表盘示例。

(cwf-reference-tune-image-color)=

### 调整图像颜色

`"color"`键可用于调整默认图像颜色：

- 应用于背景视图时将设定背景色（默认为黑色）
- 应用于cover_plate（简易表盘）或表针时，将用指定颜色（含`"bgColor"`）替换默认图像（白色）

当您在位图图像（`.jpg`或`.png`）上应用`"color"`键时，颜色将对色彩饱和度产生独特效果。 因此您仍可识别位图原貌。

最后，在`.svg`图像文件上，`"color"`键将不起作用，矢量文件的颜色被视为硬编码在图像中。 若需更改颜色，需包含多个`svg`文件，并使用高级[dynData](#cwf-reference-dyndata-feature)功能进行切换

### 为TextView使用附加字体

穿戴应用已内置多种默认字体（参见[键值](#cwf-reference-key-values)章节中的字体键）。 但若需使用非默认的附加字体，可在zip文件中添加字体文件：

- 支持的两种字体格式为`.ttf`和`.otf`文件
- 若在zip文件中添加自定义字体（例如名为`myCustomFont.ttf`的文件），则需在json文件中通过文件名指定TextView使用的字体：

```
"font": "myCustomFont",
```

请注意：部分字体文件体积较大（且zip文件存在大小限制）。 因此若仅使用极少量字符（数字、`.`、`,`），可用免费工具剔除未用字符（例如[此处](https://products.aspose.app/font/generator/ttf-to-ttf)），从而缩减字体体积。

(cwf-reference-advanced-features)=

## 高级功能

(cwf-reference-preference-feature)=

### 偏好设置功能

CustomWatchface可自动调整部分手表偏好设置，以确保表盘正确显示（前提是用户已在Wear偏好设置中授予权限）。

但此功能需谨慎使用。 偏好设置与所有其他表盘共用。 使用此功能需遵循以下规则：

- 切勿设置与隐藏视图相关的偏好设置
- 尽量最大化可见视图
- 可随意放大某些视图的宽度：
  - TBR可显示为百分比（宽度较小）或绝对值（宽度较大）
  - 含详细信息的delta或avg delta可设置较宽宽度
  - iob2同理：该视图可显示总iob，若选择详细iob则文本可能极长

若仍需特定设置才能正确显示（如下例中详细iob空间不足时），可在元数据块中添加此类设置约束，例如将参数"强制"设为`false`

```json
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template",
    "key_show_detailed_iob": false
},
```

若用户授权自定义表盘修改手表参数（通过Wear插件设置），则"显示详细iob"将被设为"禁用"状态并锁定（除非在Wear插件参数中撤销授权或切换其他表盘，否则无法修改此参数）

- 请注意：用户选择表盘时，可在选择界面查看"必要参数"的数量

下例中Gota表盘需配置1个必要参数。 未获授权时该参数显示为白色；获授权后，参数将被设定并锁定（此时数字显示为橙色）

![Required parameters](../images/CustomWatchface_2.jpg)



(cwf-reference-twinview-feature)=

### 双视图功能

双视图功能可根据可见视图轻松调整视图位置。 虽不具备完全由LinearLayout构建的布局功能，但能处理多数常见情况。

下例展示AAPS（驾驶舱）表盘：设置中所有视图均可见，以及关闭"显示设备电量"和"显示平均差值"后的同一表盘效果

![Twin Views](../images/CustomWatchface_3.jpg)

可见当双视图之一隐藏时，另一视图会自动居中显示

本例中，`"uploader_battery"`区块通过`"twinView":`键指定`"rig_battery"`视图为配对对象，而`"rig_battery"`区块的`"twinView":`键则反向指定`"uploader_battery"`为配对视图。 此外，`"leftOffsetTwinHidden":`键用于设定配对视图隐藏时本视图的像素左移量。

计算该数值时，可见双视图的leftMargin差值为50像素，故居中偏移量需按单方向差值的一半设定。

若双视图为垂直排列，则需改用`"topOffsetTwinHidden":`键

```json
"uploader_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 150,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "rig_battery",
    "leftOffsetTwinHidden": 25
},
"rig_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 200,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "uploader_battery",
    "leftOffsetTwinHidden": -25
},
```
(cwf-reference-dyndata-feature)=

### 动态数据功能

DynData是最强大的功能，可根据内部数值（如血糖值、血糖水平、变化量、电池百分比等，可用数据列表见[此处](#cwf-reference-dyndata-key-values)）为表盘添加动画效果。

为说明此功能，现以AAPS（蒸汽朋克）表盘为例：

![CustomWatchface_4](../images/CustomWatchface_4.png)

该表盘需实现：右侧[血糖值旋转](#cwf-reference-background-management)（30度至330度）、[平均差值动态范围](#cwf-reference-avg-delta-management)（根据数值按5/10/20mgdl缩放）、[指针旋转](#cwf-reference-dynamic-rotation-management)（需与刻度同步），以及各视图层级控制...

为配置此表盘，请参见压缩包内所有图片：

注：为展示透明度，所有图片均采用黄色背景并添加红色边框

![Steampunk images](../images/CustomWatchface_5.jpg)

- 首行Background.jpg和CoverPlate.png将自动关联至对应视图（默认视图文件名），steampunk_pointer.png则由dynData控制
- 次行显示avg_delta动态范围的3种刻度，同样由dynData调控
- 第三行chartBackground.jpg将手动关联至图表视图，HourHand.png和MinuteHand.png文件则自动匹配对应视图

(cwf-reference-background-management)=

#### **背景管理**

首先，关于血糖值图像，此处别无选择——必须置于背景层（否则会遮挡图表视图导致不可见！） 因此需将血糖值映射至背景层，再根据血糖值旋转背景图像。

在`"background"`区块中，我们将加入2个专用键实现旋转：

```json
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynData": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
`"dynData":`键指定定义动画的区块（数值、范围、转换等），本例使用名为"rotateSgv"的区块（使用此功能时请选用明确名称）

`"rotationOffset": true,`声明该数值动画应为旋转效果。 （若需创建滑动效果，还可使用`"leftOffset"`和`"topOffset"`键）

现在我们将跳转至文件末尾，最后一个视图之后：

```json
"second_hand": {
    "width": 120,
    "height": 120,
    "topmargin": 140,
    "leftmargin": 140,
    "visibility": "gone"
},
"dynData": {
    "rotateSgv": {
        "valueKey": "sgv",
        "minData": 30,
        "maxData": 330
    },
```
可见在末视图(`"second_hand"`)之后，我们新增了`"dynData": { ... }`区块以容纳所有动画配置：

`"background"`视图内定义的区块命名为`"rotateSgv"`，这正是`"dynData"`中的首个配置区块！

该区块配置简明：首先通过`"valueKey":`键指定关联的数值来源。 此处`"sgv"`作为"keyValue"表示血糖值（注意多数情况下keyValue与显示该信息的视图同名）。

血糖值的默认最小数据设为39mgdl，最大数据设为400mgdl（所有可用keyValue及对应最小/最大数据值详见下方[动态数据参考键值](#cwf-reference-dyndata-key-values)）。

在`"rotateSgv"`区块中，另两个键(`"minData":`和`"maxData":`)用于将数据范围调整为30至330。 通过这些最小和最大值，我们可以直接使用数据值（无需转换）来旋转背景（以度为单位）。 在此设置下，所有高于330mgdl的血糖值都将被限制在图像上限330度。

#### **图表管理**

图表默认背景为透明，为遮盖背景图像中的血糖刻度，需添加专用背景图（该图含蒸汽朋克表盘的整体阴影效果）。 通过`"background":`键关联charBackground.jpg文件

当然，视图的尺寸和定位必须精确到像素！

```json
"chart": {
    "width": 216,
    "height": 107,
    "topmargin": 280,
    "leftmargin": 80,
    "visibility": "visible",
    "background": "chartBackground"
},
```
(cwf-reference-avg-delta-management)=

#### **平均差值管理**

为实现平均差值的动态范围调控，我们将使用四个自由文本视图。 freetext1用于调控刻度图像，freetext2至freetext4则根据刻度控制指针旋转。

**freetext1**

如前所述，自由文本视图位于图表和背景层之上，因此我们设置了透明区域（图像右侧和底部）以显示这些图像。

注意：这些图像被裁切的底部区域已用作图表背景，实现无缝融合效果。

```json
"freetext1": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDeltaBackground"
},
```
该视图关联至另一个名为`avgDeltaBackground`的`"dynData"`区块。 此区块将根据avgDelta值调控avgDelta刻度。

```json
"avgDeltaBackground": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "invalidImage": "steampunk_gauge_mgdl_5",
    "image1": "steampunk_gauge_mgdl_20",
    "image2": "steampunk_gauge_mgdl_20",
    "image3": "steampunk_gauge_mgdl_10",
    "image4": "steampunk_gauge_mgdl_5",
    "image5": "steampunk_gauge_mgdl_5",
    "image6": "steampunk_gauge_mgdl_10",
    "image7": "steampunk_gauge_mgdl_20",
    "image8": "steampunk_gauge_mgdl_20"
},
```
- `"valueKey":`将关联`"avg_delta"`数值
- minData和maxData同时会将范围限制在该表盘支持的最大值区间（-20mgdl至20mgdl）。 使用mmol单位的用户请注意：AAPS内部数值始终以mgdl为单位存储。

随后我们将在此说明如何根据数值动态管理背景图像。

`"invalidImage":`键用于管理数据无效（或缺失）时显示的图像。 此处关联压缩包内含有5mgdl刻度的附加资源图像

随后我们将使用从`"image1":`到`"image8":`的系列图像。 提供的图像数量将决定`minData`与`maxData`之间的分段阶数。

- `image1`设定avg_delta等于或接近`minData`时显示的图像，编号最大的图像（此处为`image8`）则设定avg_delta等于或接近`maxData`时的显示图像
- 在-20mgdl至20mgdl范围内，总跨度为40mgdl，除以8（提供的图像数量）即得到8个5mgdl的递进步阶
- 现在根据avg_delta值映射背景图像：从最低值开始，-20至-15及-15至-10区间使用`steampunk_gauge_mgdl_20`刻度图，-10至-5区间用`steampunk_gauge_mgdl_10`，以此类推直至+15至+20区间再次使用`steampunk_gauge_mgdl_20`背景图

(cwf-reference-dynamic-rotation-management)=

**freetext2 到 freetext4**

对于这些视图，我们将结合之前说明的动态图像与旋转功能：

```json
"freetext2": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta5",
    "rotationOffset": true
},
"freetext3": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta10",
    "rotationOffset": true
},
"freetext4": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta20",
    "rotationOffset": true
},
```
此处每个视图对应特定刻度（故关联独立dynData区块），可注意到这3个视图启用了`"rotationOffset":`键。现在查看首个dynData区块：

```json
"avgDelta5": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "rotationOffset": {
        "minValue": -120,
        "maxValue": 120
    },
    "invalidImage": "null",
    "image1": "null",
    "image2": "null",
    "image3": "null",
    "image4": "steampunk_pointer",
    "image5": "steampunk_pointer",
    "image6": "null",
    "image7": "null",
    "image8": "null"
},
```
此处尽管动态范围仅使用-5至+5的avg_delta数据，但必须保持-20至+20mgdl的整体范围，以确保指针在刻度切换时与背景同步。 因此我们保持与`avgDeltaBackground`相同的整体范围和分段数量（8张图像）。

请注意：`"invalidImage"`及部分`"imagexx"`使用了`"null"`键值（该值可为压缩包内不存在的任意字符串文件名）。 当文件名未找到时，视图背景图像将显示为透明。 该设置确保指针仅在阶数4和5（avg delta介于-5mgdl至+5mgdl）时显示，超出此范围则隐藏。

现在可见新增的`"rotationOffset":`区块，内含`"minValue":`和`"maxValue":`两个键。 这些数值用于将内部数据（mgdl单位）转换为所需的指针旋转角度。

- 蒸汽朋克表盘设计为指针提供-30度至30度的最大旋转范围。 因此根据当前刻度（此处为-5mgdl至5mgdl），这些数值将对应30度的旋转角度。 由于`minData`与`maxData`范围扩大4倍，对应的minValue和maxValue也需乘以4倍，即-120度至+120度。 但当旋转角度超出±30度范围时指针将隐藏（无图像显示），仅当数值处于-5至+5mgdl区间时指针可见。 这完全符合此处设计预期。

其他dynData区块以相同方式定义，用于调整`"avgDelt10"`和`"avgDelta20"`。

#### loop视图

蒸汽朋克表盘中，状态指示的绿色/红色循环箭头被禁用，该功能同样通过关联循环视图的独立dynData区块实现。

```json
    "loopArrows": {
        "invalidImage": "greyArrows",
        "image1": "greenArrows",
        "image2": "redArrows"
    }
```
由于该区块仅由循环视图调用，且该视图默认管理循环数据，故`"valueKey":`键可省略。

循环视图默认的`minData`和`maxData`设为0分钟和28分钟，使用两张图像时：低于14分钟的数据显示`image1`背景，高于14分钟则显示`image2`。 14分钟正是绿色箭头切换为红色箭头的临界值。

本例中，`greyArrows`、`greenArrows`和`redArrows`文件未包含在压缩包内，故这些箭头被移除（不可见），但若需用自定义背景图像调整状态箭头，可直接使用该区块配置。

#### rig电池与uploader电池视图

为完成dynData功能的概览，我们将查看电池管理部分。 此处设计理念是根据电池电量（0%至100%）自定义文本颜色。

```json
"uploader_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 100,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "rig_battery",
    "topOffsetTwinHidden": -13
},
"rig_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 74,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "uploader_battery",
    "topOffsetTwinHidden": 13
},
```
可见这两个视图共享名为`batteryIcons`的同一`dynData`区块。 实现原理在于：默认关联视图自身数据（当`batteryIcons`区块未指定`"valueKey":`键时，将自动应用`uploader_battery`或`rig_battery`数据，具体取决于当前视图）。

请注意这两个视图还使用了[此处](#cwf-reference-twinview-feature)说明的TwinView功能。

现在让我们查看dynData区块：

```json
"batteryIcons": {
    "invalidFontColor": "#00000000",
    "fontColor1": "#A00000",
    "fontColor2": "#000000",
    "fontColor3": "#000000",
    "fontColor4": "#000000",
    "fontColor5": "#000000"        
},
```
此处采用与动态背景图像完全相同的逻辑，但使用专用键值（`"invalidFontColor"`及`"fontColor1"`至`"fontColor5"`来定义每20%为一个阶数的5个分段）。

- `"fontColor1"`（深红色）将用于20%以下的所有数值，超过此阈值则使用白色。
- 若需将阈值降至"10%以下"，只需新增`"fontColor6"`至`"fontColor10"`五个键值，也可通过逐级调整颜色实现从绿色到黄色、橙色直至红色的渐变效果。

(cwf-reference-dynpref-feature)=

### DynPref功能

在阅读本章前，需先掌握[dynData](#cwf-reference-dyndata-feature)的工作原理，因DynPref是其高级应用：现在您将能根据用户偏好设置来调整每个DynData区块：

为演示DynPref功能，我们将使用两个示例：

- 蒸汽朋克表盘（简易应用：通过同一表盘集成mgdl与mmol版本，根据aaps中选择的单位自动切换）。
- AAPS V2表盘将结合多项偏好设置，实现根据暗色模式及匹配分隔线偏好来管理文本颜色与背景。

#### 蒸汽朋克表盘中dynPref的简易应用

在蒸汽朋克表盘中，我们根据单位设置了两组图像：包含血糖刻度的`background`图像将随血糖值旋转。 以及根据avgDelta值动态调整刻度的`freeText1`。为实现表盘自动显示正确单位，需根据所选单位切换对应图像。

为此，我们将在视图区块中用`dynPref`键替换`dynData`键：

```json
 "background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynPref": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
`dynPref`键的用法与前一章所述`dynData`键高度相似

现在我们将查看json文件末尾，位于`dynData`区块之后的内容：

```json
"dynData": {
    ...
},
"dynPref": {
    "rotateSgv": {
        "prefKey": "key_units",
        "true": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mgdl",
            "image1": "Background_mgdl"
        },
        "false": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mmol",
            "image1": "Background_mmol"
        }
    },
    ...
}
```
可见定义于`background`视图区块的dynpref键（`"dynPref": "rotateSgv"`）已存在于json文件末尾的`dynPref`区块中：

该区块必须包含`"prefKey"`键，用于指定需调用的偏好设置项。 本示例中，键`"key_units"`关联手机端AAPS选择的单位，其值为`"true"`表示选择mgdl单位，`"false"`表示选择mmol单位。

随后您将看到两个采用"dynData"格式的json区块，系统将根据所选偏好设置调用对应区块。

请注意"HardCoded"背景图像文件名现已被动态图像替代（当key_units为"true"时使用`Background_mgdl.png`文件，为false时使用`Background_mmol.png`），同时添加了`"invalidImage"`键确保即使未收到手机数据也始终显示背景图像。

#### 在AAPS V2中整合dynPref的多项偏好设置

多数情况下，设置偏好时并非为了获得"动态行为"，而仅是呈现所选结果——但在dynPref中，这被视为动态功能特性...

- 当`dynData`需要指定包含图像、字体颜色、颜色等参数的完整区块时，`dynPref`则能根据特定偏好设置逐项组合各参数。
- 此处将演示如何将分隔线偏好与暗色偏好关联：当启用时（true），暗色表盘（dark参数为true）显示黑底白字，浅色表盘（dark为false）则显示白底黑字...

首先查看json文件起始部分：

```json
"dynPrefColor": "prefColorDark",
"pointSize": 2,
"enableSecond": false,
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "dynPref": "dark"
},
```
`"dynPrefColor": "prefColorDark"`将指定视图外所有默认颜色的dynPref区块。 这些颜色将根据`"prefColorDark"`中的dark参数进行调整：

最终在`dynPref`区块内，您会看到针对默认颜色的专属dynPref区块：

```json
"prefColorDark": {
    "prefKey": "key_dark",
    "true": {
        "highColor": "#FFFF00",
        "midColor": "#00FF00",
        "lowColor": "#FF0000",
        "lowBatColor": "#E53935",
        "carbColor": "#FB8C00",
        "basalBackgroundColor": "#0000FF",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#FFFFFF"
    },
    "false": {
        "highColor": "#A0A000",
        "midColor": "#00A000",
        "lowColor": "#A00000",
        "lowBatColor": "#E53935",
        "carbColor": "#D07C00",
        "basalBackgroundColor": "#0000A0",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#303030"
    }
}
```
此dynPref区块与视图用标准区块的区别在于：此处未为`"key_dark"`参数的每个值配置dynData区块，仅列出主色列表（`highColor`、`midColor`等）

现在查看"分隔条"内的项目（如下例中关联`"matchDivider"` dynPref视图的`"basalRate"`视图）：

```json
"basalRate": {
    "width": 90,
    "height": 32,
    "topmargin": 127,
    "leftmargin": 242,
    "rotation": 0,
    ...
    "leftOffsetTwinHidden": 33,
    "dynPref": "matchDivider"
},
```
在dynPref区块中可见分隔线参数（`key_match_divider`键）包含"true"和"false"两个区块，这两个区块仅用于定义视图将采用"dark"动态区块（与横幅外其他视图完全相同的背景和文本颜色），或采用"white"动态区块（为背景和文本设置相反颜色）...

```json
"matchDivider": {
    "prefKey": "key_match_divider",
    "true": {
        "dynPref": "dark"
    },
    "false": {
        "dynPref": "white"
    }
},
"dark": {
    "prefKey": "key_dark",
    "true": {
        "color1": "#000000",
        "fontColor1": "#FFFFFF"
    },
    "false": {
        "color1": "#FFFFFF",
        "fontColor1": "#000000"
    }
},
```
请注意此处位于"dynData"区块内，因此定义颜色或字体颜色时需使用dynData（本文未具体说明），并采用单一步骤（使用`"color1"`和`'fontColor1'`）

- 除`image`外，所有参数的默认"无效值"（若未通过`"invalidColor"`或`"invalidFontColor"`键专门设置）将采用`"color1"`和`"fontColor1"`。



接着我们将看到第三个示例——iob视图（`iob1`和`iob2`），其中详细iob数据使用较小字体，总iob数据使用较大字体：

```json
"iob1": {
    "width": 125,
    "height": 33,
    "topmargin": 168,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 19,
    ...
    "dynPref": "prefIob1"
},
"iob2": {
    "width": 125,
    "height": 33,
    "topmargin": 196,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 24,
    ...
    "leftOffsetTwinHidden": -10,
    "dynPref": "prefIob2"
},
```
在默认视图设置中可见文本大小（`iob1`为19，`iob2`为24），以及两个不同的`dynPref`区块：一个根据详细iob参数调整文本尺寸，另一个根据暗色参数调整颜色。

```json
"prefIob1": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 24
    },
    "false": {
        "dynPref": "dark"
    }
},
"prefIob2": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 19
    },
    "false": {
        "dynPref": "dark"
    }
},
```
此处可见：根据详细iob参数（`"key_show_detailed_iob"`键），当其为"true"时，文本尺寸被固定设置为比默认值更大的数值（24替代19）——这是通过仅含单值的文本尺寸"阶梯"功能实现的...（注意：除图像外所有参数，若未设置invalidTextSize，则无效数据将使用textsize1）

随后"dark"动态偏好区块将用于设置颜色与字体颜色

本示例中，当详细IOB启用且暗色模式开启时，将调用以下dynData区块作用于iob1视图：

```
{
    "color1": "#000000",
    "fontColor1": "#FFFFFF",
    "textsize1": 24
},
```

因此文本将显示为黑底白字，且24号字体尺寸将替换视图中预设的19号默认尺寸。

当详细IOB禁用且暗色模式关闭时，作用于同一iob1视图的dynData区块为：

```
{
    "color1": "#FFFFFF",
    "fontColor1": "#000000"
},
```

此时文本将以白底黑字显示，并保持19号字体尺寸。

#### dynPref使用技巧

- 您可以组合任意数量的偏好设置，但需注意描述区块数量会呈指数级增长：若串联3个参数且需定义所有情形（假设每个参数仅有2种取值），则需描述8个区块...
- 注意避免构建"无限循环"（例如当dynpref1区块需由dynpref2区块补充，而dynpref2区块又需由dynpref1区块补充时...）。 此时这些dynpref区块将被视为无效...
- 使用视图中的`"textsize"`键时，必须在dynPref值区块中使用`"textsize1"`（因其采用"dynData"格式，本例中仅关联单一步骤的值），切勿忘记在键名后添加数字索引。
- 每个视图仅应设置一个`"valueKey"`键，因此若最终`dynData`区块由多个`dynPref`区块构建时，切勿包含多个`"valueKey"`（及其关联的`"minData"`、`"maxData"`等参数）。

(cwf-reference-new-v2-features)=

### 自定义表盘V2的新功能（适用于AAPS V3.3.0及以上版本）

请注意，使用这些新功能或视图的表盘需要基于AAPS 3.3.0版本构建的最新wear apk。

若在搭载CustomWatchface V1的手表上使用"v2"压缩包，表盘将出现信息缺失或内容错误。

自定义表盘V2包含以下新功能：

- [全新状态视图](cwf-reference-new-status-feature)
- [全新临时目标视图](cwf-reference-new-temp-target-feature)
- [全新储药器余量视图](cwf-reference-new-reservoir-level-feature)
- [全新格式设置功能](cwf-reference-new-formating-feature)
- [显示跟随者外部数据](cwf-reference-show-external-datas)（单个表盘最多可显示3组数据：AAPS、AAPSCLIENT和AAPSCLIENT2）

(cwf-reference-new-status-feature)=

#### 全新状态视图

该视图的键为`"status"`，其关联区块已自动包含在wear apk"自定义表盘V2"（基于AAPS 3.3.0及以上版本构建）导出的模板中。

该视图已内置在早期AAPS（无图表）、AAPS（大图表）和AAPS（大号）等现有表盘中，并包含由wear apk构建的字符串值。

AAPS 3.3.0版本中已移除这些旧表盘，替换为3款全新自定义表盘。

- 最低显示信息为IOB值（无论手表IOB参数如何设置始终可见）
- 若在偏好设置中启用，则显示详细IOB值（大剂量IOB|基础率IOB）
- 以及BGI值（同样需在偏好设置中启用）

该`"status"`视图通过`"key_show_loop_status"`键（位于dynPref内）关联，用于管理可见性。

该视图在V1版本中可通过`"iob1"`、`"iob2"`和`"bgi"`现有视图实现，但需配置复杂的dynPref设置来根据手表不同选项调节各信息间距。

(cwf-reference-new-temp-target-feature)=

#### 全新临时目标视图

该视图的键为`"tempTarget"`，其关联区块已自动包含在由wear apk"自定义表盘V2"（基于AAPS 3.3.0及以上版本构建）导出的模板中。

表盘将显示以下内容：

- 配置文件目标值（单值或最小-最大目标范围）（默认白色显示）
- Loop adjusted target (default color in Green)
- Temp Target defined by user (default color in Yellow)

This `"tempTarget"` view is associated with `"key_show_temp_target"` key (within dynPref) to manage visibility.

The DynData Key (associated with color information) is `"tempTarget"` (default DynData key associated with TempTarget View)

DynData value equals:

- 0 (Profile Target),
- 1 (Loop Target) or
- 2 (User Temp Target)

Note that this view is also available for external data (see [below](cwf-reference-show-external-datas)) with `"tempTarget_Ext1"` and  `"tempTarget_Ext2"` keys (View and DynData)

(cwf-reference-new-reservoir-level-feature)=

#### 全新储药器余量视图

The key of this view is `"reservoir"` and associated block is automatically included into the template exported from wear apk "Custom Watchface V2" (built from AAPS 3.3.0 version or above).

This view show Reservoir level (in `U`) with a White default color, Yellow if Warning Level, Red if Urgent Level

This `"reservoir"` view is associated with `"key_show_reservoir_level"` key (within dynPref) to manage visibility.

The DynData Keys associated with Reservoir Level are:

-  `"reservoir"`  (Default DynData Key associated with Reservoir Level view) associated with level in insulin `U`
  - Min Value is 0.0 U
  - Max Value is 500.0 U
-  `"reservoirLevel"`
  - 0 (Standard Level, White Color by default)
  - 1 (Warning Level, Yellow color by default)
  - 2 (Urgent Level, Red color by default)

Note that this view is also available for external data (see [below](cwf-reference-show-external-datas)) with `"reservoir_Ext1"`, `"reservoir_Ext2"`, `"reservoirLevel_Ext1"` and  `"reservoirLevel_Ext2"` keys (View and DynData).

(cwf-reference-new-formating-feature)=

#### New Formatting feature for DynData or DynPref

You can now manage a custom formatting of raw values received by the watch and included in [dyndata key value table](#cwf-reference-dyndata-key-values) below.

To illustrate how this feature works, lets take as an example AAPS (Large) watchface and look at the results according to "time ago value" and the new "status" view visible or not:

![AAPS (Large)](../images/CustomWatchface_6.jpg)

- In first screenshot in the left, status view is visible (with IOB, detailed IOB and BGI), so only 1/3 of the line is available to show timestamp (very compact information with `1'`, and for uploader battery information `U: 55%`)
- In second screenshot, now `status`view has been hidden in watch parameter, so you have a lot of place available to show full label for timestamp information and uploader battery (`1 minute ago` and `Uploader : 55%`)
- In the third screenshot in the right, you have exactly the same setting within watch, but now timestamp has changed and is above "1". now the custom watchface is able to show the label updated with plural management (`2 minutes ago`)

I will not explain below how the whole views are managed within zip file (positioning of each view according to different settings), but I will only focus on the way we manage formatting feature and associated dynamic value within AAPS (Large) watchface.



**This feature requires "dynamic block"** (it can be either a `dynData` block or a `dynPref` block)

- For AAPS (Large) Watchface, we wanted to have the format tuned according to parameters (short or long format according to `status` view visibility) so we used a `dynPref` block for that.

First lets start by the views:

```json
"uploader_battery": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "uploader",
    "dynValue": false,
    "fontColor": "#BDBDBD"
},

"timestamp": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "timestamp",
    "dynValue": false,
    "fontColor": "#FFFFFF"
},
```
here the most important key is `"dynValue"`: Having this key information will enable dynamic management of raw value. the boolean behind (true or false) will define if value should be "converted or not"

- `false`: raw value will be use as it is without any limitation or conversion
- `true`: raw value will be converted (using `minData` and `maxData` keys in dynData block and using `minValue` and `maxValue` defined in dynData)

For this watchface, raw values are used without any conversion, so for both views, `"dynValue"` key as been set to `false`.



Now we will take a look on `"uploader"` block defined within `"dynPref"`:

```json
"uploader": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "uploader_true_ago",
        "invalidTextvalue": "U: --",
        "textvalue1": "U: %.0f%%"
    },
    "false": {
        "dynPref": "uploader_false_ago",
        "invalidTextvalue": "Uploader: --",
        "textvalue1": "Uploader: %.0f%%"
    }
},
```
By default  `"uploader_battery"` view is linked to `"uploader_battery"` , so no need to add an explicit line with

`"valueKey": "uploader_battery"` (min value 0, max value 100, and raw value is percentage of phone battery)

The formatting string is included into `"textvalue1"` key (`"textvalue1"`, `"textvalue2"`, etc keys are linked to `"textvalue"` key that could be included into `view` block)

- `"textvalue"`  key can be used with formatting information within the view block (in this situation format will be static, whatever the value or the settings)
- If you want to modify formatting information according to settings or values, thenall dynData feature can be applied, and the dedicated keys are `"invalidTextValue"` key (without "formatting information" because value is not valid) and `"textvalue1"`, `"textvalue2"`... (and as many values that you want to manage steps between minData and maxData)
- the additional `"dynPref"` keys are used to define other blocks for positioning variation and color variation depending on visible views, dark and matchDivider settings

Concerning now the formatting string, syntax is the following: `%[flags][width][.precision]f`

- `%` is the beginning of a formatting, `f` is the end and should be used for Double value conversion.
  - Note that if you want to use `%` character within your string, you will have to use `%%` to specify that it's not a formatting string but percentage character.
- `[flag]` is optional, mainly can be `+` if you always want a sign before the number, or `(` if you want negative values in parentheses
- `[width]`  is optional, define the minimum number of characters to be written to the output
- `[.precision]` used to define number of digits after radix point.
  - Note that values are Double so it's wise to always set a precision (to avoid a lot of characters after radix point due to kotlin precision)

So in the above example `%.0f` will show Double value as an integer



Let's now take a look on timestamp dynPref block to manage plural:

```json
"timestamp": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "timestamp_true_uploader",
        "invalidTextvalue": "U: --",
        "textvalue1": "%.0f'"
    },
    "false": {
        "dynPref": "timestamp_false_uploader",
        "minData": 0,
        "maxData": 3,
        "invalidTextvalue": "-- minute ago",
        "textvalue1": "%.0f minute ago",
        "textvalue2": "%.0f minutes ago"
    }
},
```
- here if `status` view is visible (so  `"key_show_loop_satus"` key is `true`), a single format is used (`"textvalue1"`), with `'`  as "unit"
- if  `status` view is hidden, you have 2 different format used one for 0 or 1 with singular, and another format for values above 2 with plural
  - `"minData"` and `"maxData"` are used to define the range and be sure the switch from singular to plural will be done between 1 and 2 values
  - Note that `"maxData"` (integer) has been set to 3 and not 2, just because Double data managed into the system is not integer, so a value a bit above or a bit lower 1 may have singular or plural format even if after rounding to integer, the value equals 1.

- For `timestamp` view, it's important to set `"dynValue"` key to `false`,  otherwise because of formatting (singular/plural), all values above 3 will be limited to `3 minutes ago` with conversion using `maxData`...



**Additional comment concerning formatting feature**

- keep in mind that the only dynamic values available are the one listed [here](#cwf-reference-dyndata-key-values)
- All `BG` values are in mgdl unit, if you want to use formatting feature to show values in mmol units, you will have to manage mgdl to mmol conversion. Within a `dynData` or `dynPref` block, the key that should be used to name the block that will include `"minValue"`and `"maxValue"` for value conversion should be named `"dynValue": { ...  }`. (see [Dyn Data Keys](#cwf-reference-dyndata-keys))
- If within a view you want to use a static formatting string, with `"textvalue"` key to define format, and `"dynValue"` key to define usage of dynamic value, then you will have to also use a `"dynData"` or a `"dynPref"`block (even if empty), to be able to use formatting feature.
- `"textvalue1"`, `"textvalue2"` to textvalue*n* can be used without formatting feature to replace double value step by a dedicated text label (for example with `"day_name"` key value and  seven steps to define custom name of the dayx of the week, ... )

- For full documentation you can see [Class Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)

(cwf-reference-show-external-datas)=

#### Show External data for Follower

Custom Watchface is now able to display on the same watchface up to 3 set of data: AAPS, AAPSCLIENT and AAPSCLIENT2

To use this feature, you need to:

- have at least 2 of the 3 following apps installed in phone (AAPS, AAPSCLIENT, AAPSCLIENT2)
- enable Broadcast data in AAPSCLIENT and/or AAPSCLIENT2 to broadcast data to the main app used to sync with CustomWatchface (AAPS or AAPSCLIENT)
- Use a CustomWatchface that implement Views with Key including `_Ext1` or `_Ext2` (see [Key and KeyValue reference](cwf-reference-key-and-keyvalue-reference) below)

Note that if main app in phone is AAPSCLIENT and secondary app which broadcast data is AAPSCLIENT2, you will have to enable `Switch external data in watchface` parameter within Custom Watchface dedicated parameter if you use a watchface which use standard views and Ext1 additional views (Ext1 is linked to AAPSCLIENT and Ext2 is linked to AAPSCLIENT2)

Additionally three new views (`"patient_name"` , `"patient_name_Ext1"`  and `"patient_name_Ext2"` *) has been added to be able to automatically include patient name (set within AAPS preferences) within watchface (see example below)

![CustomWatchface_7](../images/CustomWatchface_7.png)

(cwf-reference-key-and-keyvalue-reference)=

## Key and KeyValue reference

(cwf-reference-list-of-metadata-keys)=

### List of Metadata keys

(cwf-reference-list-of-standard-metadata-keys)=

#### List of Standard information metadata keys

| Key                | Comment                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| `"name"`           | Name of custom watchface                                                                                       |
| `"author"`         | Name or pseudo of the author(s)                                                                                |
| `"created_at"`     | Creation (or update) date, be careful `/` is a special character, so if you use it for the date put `\`before |
| `"cwf_version"`    | Watchface plugin compatible with the design of your watchface                                                  |
| `"author_version"` | The author can specify here the version of his watchface                                                       |
| `"comment"`        | Free text that can be used to give some information or limitation of current watchface                         |

(cwf-reference-preference-keys)=

#### Preference keys

| Key                           | Default value and Comment                                                                                                                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"key_show_detailed_iob"`     | true will lock detailed IOB data on view `iob2`, then `iob1` (if visible and not replaced by an icon) will show iob total.<br />false will lock total iob on `iob2`view. can be used if the width of `iob2`is too small to show correctly detailed iob |
| `"key_show_detailed_delta"`   | false (only if design is not compatible with the width of detailed delta for `delta`and `avg_delta` views)                                                                                                                                                   |
| `"key_show_bgi"`              | true if your design requires `bgi` information                                                                                                                                                                                                               |
| `"key_show_iob"`              | true if your design requires `iob1` or `iob2`views                                                                                                                                                                                                           |
| `"key_show_cob"`              | true if your design requires `cob1` or `cob2`views                                                                                                                                                                                                           |
| `"key_show_delta"`            | true if your design requires `delta` information                                                                                                                                                                                                             |
| `"key_show_avg_delta"`        | true if your design requires `avg_delta` information                                                                                                                                                                                                         |
| `"key_show_temp_target"`      | true if your design requires `tempTarget` information                                                                                                                                                                                                        |
| `"key_show_reservoir_level"`  | true if your design requires `reservoir` information                                                                                                                                                                                                         |
| `"key_show_uploader_battery"` | true if your design requires `uploader_battery` (phone battery) information                                                                                                                                                                                  |
| `"key_show_rig_battery"`      | true if your design requires `rig_battery` information                                                                                                                                                                                                       |
| `"key_show_temp_basal"`       | true if your design requires `basalRate` information                                                                                                                                                                                                         |
| `"key_show_direction"`        | true if your design requires `direction` information (BG variation arrows)                                                                                                                                                                                   |
| `"key_show_ago"`              | true if your design requires `timestamp` information (minutes ago for last received BG)                                                                                                                                                                      |
| `"key_show_bg"`               | true if your design requires `sgv` information (BG value)                                                                                                                                                                                                    |
| `"key_show_loop_status"`      | true if your design requires `loop` information (loop status and ago)                                                                                                                                                                                        |
| `"key_show_week_number"`      | true if your design requires `week_number` information (loop status and ago)                                                                                                                                                                                 |
| `"key_show_date"`             | true if your design requires `Date`, `Month` or `Day of the week` information                                                                                                                                                                                |

#### Internal keys

| Key                   | Comment and                                                                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"filename"`          | This key will be created (or updated) automatically when the watchface is loaded and will contains local zip filename within exports folder                                                   |
| `"cwf_authorization"` | this key will be created (when the watchface is loaded) and updated each time authorization preference is changed in Wear settings, and it will be used to synchronize authorization to watch |

(cwf-reference-list-of-general-parameters)=

### List of General parameters

| Key                      | Comment                                                                                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"highColor"`            | `"#FFFF00"`(default Yellow): Color of BG value, trend arrows and bg value in graph if bg is above upper limit (Hyper)                                                                                                                                     |
| `"midColor"`             | `"#00FF00"`(default Green): Color of BG value, trend arrows and bg value in graph if bg is within range                                                                                                                                                   |
| `"lowColor"`             | `"#FF0000"`(default Red): Color of BG value, trend arrows and bg value in graph if bg is below lower limit (Hypo)                                                                                                                                         |
| `"lowBatColor"`          | `"#E53935"`(default Dark Red): Color of `uploader_battery` when value is low (below 20% tbc)                                                                                                                                                              |
| `"carbColor"`            | `"#FB8C00"`(default Orange): Color of Carbs points within graph                                                                                                                                                                                           |
| `"basalBackgroundColor"` | `"#0000FF"`(default Dark blue): Color of TBR curve within graph                                                                                                                                                                                           |
| `"basalCenterColor"`     | `"#64B5F6"`(default Light blue): Color of Bolus or SMB points within graph                                                                                                                                                                                |
| `"gridColor"`            | `"#FFFFFF"`(default White): Color of lines and text scale within graph                                                                                                                                                                                    |
| `"pointSize"`            | 2 (default): size of points in graph (1 for small point, 2 for big points)                                                                                                                                                                                |
| `"enableSecond"`         | false (default): specify if watchface will manage seconds or not within `time`, `second` or `second_hand` views. it's important to be consistent between view visibility and this overall setting that will allow update every second of time information |
| `"dayNameFormat"`        | "E" (default): from "E" to "EEEE" specify dayname format (number, short name, full name) tbc                                                                                                                                                              |
| `"monthFormat"`          | "MMM" (default): from "M" to "MMMM" specify month format (number, short name, full name)                                                                                                                                                                  |

(cwf-reference-list-of-hardcoded-resource-files)=

### List of HardCoded resource files

For most images, High and Low suffix allow tuning of image according to BG level (in Range, Hyper or Hypo)

| Filenames                                                       | Comment                                                                                                                                                                  |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CustomWatchface                                                 | Image shown for watchface selection and within Wear plugin                                                                                                               |
| Background,<br />BackgroundHigh,<br />BackgroundLow | none (default black): Background image. background is always visible and default color is black if no image provided. Color can be modified to fit watchface design      |
| CoverChart,<br />CoverChartHigh,<br />CoverChartLow | none (default): Image in front of Chart (transparency should be available to see Chart behind) Can be used to limit boundaries of graph                                  |
| CoverPlate,<br />CoverPlateHigh,<br />CoverPlateLow | simple dial (default): image in front of all text values. transparency mandatory to see all values that are behind                                                       |
| HourHand,<br />HourHandHigh,<br />HourHandLow       | hour_hand (default): image of hour hand. a default image is provided and can be colored to fit analog design. Note axis for rotation will be the center of the image     |
| MinuteHand,<br />MinuteHandHigh,<br />MinuteHandLow | minute_hand (default): image of minute hand. a default image is provided and can be colored to fit analog design. Note axis for rotation will be the center of the image |
| SecondHand,<br />SecondHandHigh,<br />SecondHandLow | second_hand (default): image of second hand. a default image is provided and can be colored to fit analog design. Note axis for rotation will be the center of the image |
| ArrowNone                                                       | ?? (default): image shown when no valid arrow is available.                                                                                                              |
| ArrowDoubleUp                                                   | ↑↑ (default): image of double arrow up                                                                                                                                   |
| ArrowSingleUp                                                   | ↑ (default): image of single arrow up                                                                                                                                    |
| Arrow45Up                                                       | ↗ (default): image of fortyfive arrow up                                                                                                                                 |
| ArrowFlat                                                       | → (default): image of flat arrow                                                                                                                                         |
| Arrow45Down                                                     | ↘ (default): image of fortyfive arrow down                                                                                                                               |
| ArrowSingleDown                                                 | ↓ (default): image of single arrow down                                                                                                                                  |
| ArrowDoubleDown                                                 | ↓↓ (default): image of double arrow down                                                                                                                                 |

For each above filenames, extension can be either `.jpg`, `.png` or `.svg`. But be careful, `.jpg`doesn't manage transparency (so most of the files should be with .png or .svg to not hide view that are behind...)

(cwf-reference-list-of-view-keys)=

### List of View keys

This list is sorted from background to foreground this is very important when you organize your watchface to know this order because some image or text can be hidden by other images.

Note: all keys including `_Ext1` or `_Ext2` at the end are new and dedicated for multi users Watchfaces.

| Key                                                                                    | Type of view        | Data attached                                                                                                                         | DynData Key                                                                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"background"`                                                                         | Image View          |                                                                                                                                       |                                                                                                                                                  |
| `"chart"`                                                                              | Specific Chart View | Graphical curves                                                                                                                      |                                                                                                                                                  |
| `"cover_chart"`                                                                        | Image View          |                                                                                                                                       |                                                                                                                                                  |
| `"freetext1"`                                                                          | Text View           |                                                                                                                                       |                                                                                                                                                  |
| `"freetext2"`                                                                          | Text View           |                                                                                                                                       |                                                                                                                                                  |
| `"freetext3"`                                                                          | Text View           |                                                                                                                                       |                                                                                                                                                  |
| `"freetext4"`                                                                          | Text View           |                                                                                                                                       |                                                                                                                                                  |
| `"patient_name"` *<br/>`"patient_name_Ext1"` *<br/>`"patient_name_Ext2"` * | Text View           | Patient Name                                                                                                                          |                                                                                                                                                  |
| `"iob1"`<br/>`"iob1_Ext1"` *<br/>`"iob1_Ext2"` *                           | Text View           | IOB label or IOB Total                                                                                                                |                                                                                                                                                  |
| `"iob2"`<br/>`"iob2_Ext1"` *<br/>`"iob2_Ext2"` *                           | Text View           | IOB Total or IOB Detailed                                                                                                             |                                                                                                                                                  |
| `"cob1"`<br/>`"cob1_Ext1"` *<br/>`"cob1_Ext2"` *                           | Text View           | Carb label                                                                                                                            |                                                                                                                                                  |
| `"cob2"`<br/>`"cob2_Ext1"` *<br/>`"cob2_Ext2"` *                           | Text View           | COB Value                                                                                                                             |                                                                                                                                                  |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                        | Text View           | Short delta (5 min)                                                                                                                   | delta  
delta_Ext1<br/>delta_Ext2                                                                                                          |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *            | Text View           | Avg Delta (15 min)                                                                                                                    | avg_delta<br/>avg_delta_Ext1<br/>avg_delta_Ext2                                                                                  |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *        | Text View           | BG Target (single value or min - max targets values)                                                                                  | tempTarget<br/>tempTarget_Ext1<br/>tempTarget_Ext2                                                                                   |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *           | Text View           | Reservoir level                                                                                                                       | reservoir<br/>reservoirLevel<br/>reservoir_Ext1<br/>reservoirLevel_Ext1<br/>reservoir_Ext2<br/>reservoirLevel_Ext2 |
| `"uploader_battery"`                                                                   | Text View           | phone battery level (%)                                                                                                               | uploader_battery                                                                                                                                 |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *      | Text View           | rig battery level (%)                                                                                                                 | rig_battery<br/>rig_battery_Ext1<br/>rig_battery_Ext2                                                                            |
| `"basalRate"`<br/>`"basalRate_Ext1"` *<br/>`"basalRate_Ext2"` *            | Text View           | % or absolute value                                                                                                                   |                                                                                                                                                  |
| `"bgi"`<br/>`"bgi_Ext1"` *<br/>`"bgi2_Ext2"` *                             | Text View           | mgdl/(5 min) or mmol/(5 min)                                                                                                          |                                                                                                                                                  |
| `"status"` *<br/>`"status_Ext1"` *<br/>`"status_Ext2"` *                   | Text View           | Synthesis of IOB (whatever IOB setting in watch), Detailed IOB (according to setting in watch and BGI (according to setting in watch) |                                                                                                                                                  |
| `"time"`                                                                               | Text View           | HH:MM or HH:MM:SS                                                                                                                     |                                                                                                                                                  |
| `"hour"`                                                                               | Text View           | HH                                                                                                                                    |                                                                                                                                                  |
| `"minute"`                                                                             | Text View           | MM                                                                                                                                    |                                                                                                                                                  |
| `"second"`                                                                             | Text View           | SS                                                                                                                                    |                                                                                                                                                  |
| `"timePeriod"`                                                                         | Text View           | AM or PM                                                                                                                              |                                                                                                                                                  |
| `"day_name"`                                                                           | Text View           | name of the day (cf. dayNameFormat)                                                                                                   | day_name                                                                                                                                         |
| `"day"`                                                                                | Text View           | DD date                                                                                                                               | day                                                                                                                                              |
| `"week_number"`                                                                        | Text View           | (WW) week number                                                                                                                      | week_number                                                                                                                                      |
| `"month"`                                                                              | Text View           | month name (cf. monthFormat)                                                                                                          |                                                                                                                                                  |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                           | Text View           | min ago since last run and status (color arrows in background), color arrows can be tuned with DynData                                | loop                                                                                                                                             |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *            | Image View          | TrendArrows                                                                                                                           | direction                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *            | Text View           | integer (min ago)                                                                                                                     | timestamp                                                                                                                                        |
| `"sgv"`<br/>`"sgv_Ext1"` *<br/>`"sgv_Ext2"` *                              | Text View           | sgv value (mgdl or mmol)                                                                                                              | sgv<br />sgvLevel<br/>sgv_Ext1<br />sgvLevel_Ext1<br/>sgv_Ext2<br />sgvLevel_Ext2                                  |
| `"cover_plate"`                                                                        | Image View          |                                                                                                                                       |                                                                                                                                                  |
| `"hour_hand"`                                                                          | Image View          |                                                                                                                                       |                                                                                                                                                  |
| `"minute_hand"`                                                                        | Image View          |                                                                                                                                       |                                                                                                                                                  |
| `"second_hand"`                                                                        | Image View          |                                                                                                                                       |                                                                                                                                                  |

**View added in Custom Watchface V2.0 or above (available on AAPS 3.3.0 wear apk or above)*

(cwf-reference-list-of-json-keys)=

### List of Json keys

(cwf-reference-common-keys)=

#### Common keys

 that can be used on all view types (Text View, image View, graph view)

| Key                      | type    | comment / value                                                                                                                                                                        |
| ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"width"`                | int     | width of view in pixel                                                                                                                                                                 |
| `"height"`               | int     | height of view in pixel                                                                                                                                                                |
| `"topmargin"`            | int     | top margin in pixel                                                                                                                                                                    |
| `"leftmargin"`           | int     | left margin in pixel                                                                                                                                                                   |
| `"rotation"`             | int     | rotation angle in degrees                                                                                                                                                              |
| `"visibility"`           | string  | see key value table                                                                                                                                                                    |
| `"dynData"`              | string  | key block name that will specify dynamic data to link and associated animation (colors, image, shift, rotation)<br />`"dynData": "customName",` (see below )                     |
| `"leftOffset"`           | boolean | include this key with key value true to enable horizontal shift (positive or negative value) due to dynData value                                                                      |
| `"topOffset"`            | boolean | include this key with key value true to enable vertical shift (positive or negative value) due to dynData value                                                                        |
| `"rotationOffset"`       | boolean | include this key with key value true to enable rotation (positive or negative value) due to dynData value                                                                              |
| `"twinView"`             | string  | key of the other view (generally the other view also include the twinView parameter with the key of this view in it)                                                                   |
| `"topOffsetTwinHidden"`  | int     | number of pixel to shift view position vertically if twin view is hidden (positive or negative value)<br />topOffsetTwinHidden = (topOffset twinView - topOffset thisView)/2     |
| `"leftOffsetTwinHidden"` | int     | number of pixel to shift view position horizontally if twin view is hidden (positive or negative value)<br />leftOffsetTwinHidden= (leftOffset twinView - leftOffset thisView)/2 |
| `"dynPref"`              | string  | key block name that will specify dynamic pref to link and associated animation (colors, image, shift, rotation)<br />`"dynPref": "customName",` (see below )                     |

(cwf-reference-textview-keys)=

#### TextView keys

| Key            | type    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"textsize"`   | int     | size of font in pixel (keep in mind that font can include top and bottom margin so the real text size will generally be smaller than the number of pixel set). Note that size should be smaller than view height to not be truncated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `"gravity"`    | string  | see key value table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"font"`       | string  | see key value table for available fonts.<br />Can also be font filename (without extension) for fonts included into zip file                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `"fontStyle"`  | string  | see key value table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"fontColor"`  | string  | Manage color of the font<br />`"#RRVVBB"`: color code in RVB format, hexadecimal values #FF0000 is red<br />`"#AARRVVBB"`: AA include Alpha information (transparency), 00 is transparent, FF is opaque<br />`"bgColor"`: keyValue bgColor is an easy way to use highColor, midColor or lowColor according to BG value                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `"allCaps"`    | boolean | true if you want text in uppercase (mainly day name or month name)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `"background"` | string  | `resource_filename` you can include a resource image as background of the text view (resource file will be resized to fit height and width of text view, but keeping image ratio). text value will be in front of background image.<br />- Note that this key can also be used for `chart` view to set a custom background to the chart, in front of background image                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `"color"`      | string  | Manage the color of view Background or tune color of image (if bitmap only)<br />`"#RRVVBB"`: color code in RVB format, hexadecimal values #FF0000 is red<br />`"#AARRVVBB"`: AA include Alpha information (transparency), 00 is transparent, FF is opaque<br />`"bgColor"`: keyValue bgColor is an easy way to use highColor, midColor or lowColor according to BG value<br />- For default embedded image (hand, dial) color will be applied directly, for bitmap image (jpg or png) this will apply a saturation gradient filter on imagae<br />- For svg this parameter will have no effect (color of svg files cannot be modified)<br />- Note that this key can also be used for `chart` view to set a custom background to the chart, in front of background image |
| `"textvalue"`  | string  | Key specific to the 4 free text views included into the layout (from freetext1 to freetext4), this allow you to set the text that should be included (can be a label, or just `:` if you want to add a separator between hour view and minute view...)  
From Custom Watchface plugin v2 (AAPS 3.3), textvalue can be used to include a format string for the other textViews (to use with `dynValue` key and `dynData` or `dynPref`). for example                                                                                                                                                                                                                                                                                                                                                            |
| `"dynValue"`*  | boolean | true if you want to include raw value in (double). Useful with `texvalue` key if you want a dedicated format to show value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

**Key added in Custom Watchface V2.0 or above (available on AAPS 3.3.0 wear apk or above)*

(cwf-reference-imageview-keys)=

#### ImageView keys

| Key       | type   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"` | string | Manage the color of view Background or tune color of image (if bitmap only)<br />`"#RRVVBB"`: color code in RVB format, hexadecimal values #FF0000 is red<br />`"#AARRVVBB"`: AA include Alpha information (transparency), 00 is transparent, FF is opaque<br />`"bgColor"`: keyValue bgColor is an easy way to use highColor, midColor or lowColor according to BG value<br />- For default embedded image (hand, dial) color will be applied directly, for bitmap image (jpg or png) this will apply a saturation gradient filter on imagae<br />- For svg this parameter will have no effect (color of svg files cannot be modified)<br />- Note that this key can also be used for `chart` view to set a custom background to the chart, in front of background image |

(cwf-reference-chartview-keys)=

#### ChartView keys

| Key            | type   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"`      | string | Manage the color of view Background or tune color of image (if bitmap only)<br />`"#RRVVBB"`: color code in RVB format, hexadecimal values #FF0000 is red<br />`"#AARRVVBB"`: AA include Alpha information (transparency), 00 is transparent, FF is opaque<br />`"bgColor"`: keyValue bgColor is an easy way to use highColor, midColor or lowColor according to BG value<br />- For default embedded image (hand, dial) color will be applied directly, for bitmap image (jpg or png) this will apply a saturation gradient filter on imagae<br />- For svg this parameter will have no effect (color of svg files cannot be modified)<br />- Note that this key can also be used for `chart` view to set a custom background to the chart, in front of background image |
| `"background"` | string | `resource_filename` you can include a resource image as background of the text view (resource file will be resized to fit height and width of text view, but keeping image ratio). text value will be in front of background image.<br />- Note that this key can also be used for `chart` view to set a custom background to the chart, in front of background image                                                                                                                                                                                                                                                                                                                                                                                                                                   |

(cwf-reference-key-values)=

### Key values

| Key value                    | key        | comment                                                                           |
| ---------------------------- | ---------- | --------------------------------------------------------------------------------- |
| `"gone"`                     | visibility | view hidden                                                                       |
| `"visible"`                  | visibility | view visible in watchface (but visibility can be enable or disable in parameters) |
| `"center"`                   | gravity    | text is vertical and horizontal centered into the view                            |
| `"left"`                     | gravity    | text is vertical centered but left aligned into the view                          |
| `"right"`                    | gravity    | text is vertical centered but right aligned into the view                         |
| `"sans_serif"`               | font       |                                                                                   |
| `"default"`                  | font       |                                                                                   |
| `"default_bold"`             | font       |                                                                                   |
| `"monospace"`                | font       |                                                                                   |
| `"serif"`                    | font       |                                                                                   |
| `"roboto_condensed_bold"`    | font       |                                                                                   |
| `"roboto_condensed_light"`   | font       |                                                                                   |
| `"roboto_condensed_regular"` | font       |                                                                                   |
| `"roboto_slab_light"`        | font       |                                                                                   |
| `"normal"`                   | fontStyle  |                                                                                   |
| `"bold"`                     | fontStyle  |                                                                                   |
| `"bold_italic"`              | fontStyle  |                                                                                   |
| `"italic"`                   | fontStyle  |                                                                                   |

(cwf-reference-dyndata-keys)=

### DynData keys

| Key                       | type   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynData"`               | block  | define the block of all dynamic data blocks that will be used for the views. generally after the last view.<br />All the keys defined within this block will be used as key Value within view block:<br />`"dynData": { dynData blocks }`<br />and each block is defined by a custom name and several keys inside:<br />`"customName": { one dynData block }`                                                                                                                                   |
| `"valueKey"`              | string | name of dynamic data to use (generally same that associated view key).<br />If not existing, the default will be the values used for the view that uses this block. <br />for example you can define one block to customize battery level percentage without specifying valueKey, and then use the same block to customize uploader_battery and rig_battery                                                                                                                                               |
| `"minData"`               | int    | specify the minimum value to take into account for AAPS data : for example if value is sgv (unit mgdl internally), if minData is set to 50, all bg values below 50mgdl will be set to 50.<br />- Note that minData and maxData will be used to calculate dynamic values (in pixel or in degrees).                                                                                                                                                                                                                 |
| `"maxData"`               | int    | specify the maximum value to take into account for AAPS data : for example if value is sgv (unit mgdl internally), if maxData is set to 330, all bg values above 330mgdl will be set to 330.                                                                                                                                                                                                                                                                                                                            |
| `"leftOffset"`            | block  | Specify the horizontal shift of the view according to min and max values in pixels.<br />- It includes minValue key, maxValueKey and invalidValue key (optional)<br />- If data is below or equal minData, then the view will be shifted to minValue pixels, and if data is above or equal to maxData, then the view will be shifted to maxValue pixels<br />Note that to apply this shift, `leftOffset` should be set to true within the view                                                        |
| `"topOffset"`             | block  | Specify the vertical shift of the view according to min and max values in pixels.<br />- It includes minValue key, maxValueKey and invalidValue key (optional)<br />- If data is below or equal minData, then the view will be shifted to minValue pixels, and if data is above or equal to maxData, then the view will be shifted to maxValue pixels<br />Note that to apply this shift topOffset should be set to true within the view                                                              |
| `"rotationOffset"`        | block  | Specify the rotation angle in degrees of the view according to min and max values in pixels.<br />- It includes `minValue` key, `maxValue` Key and `invalidValue` key (optional)<br />- If data is below or equal `minData`, then the view will rotate by `minValue` degrees, and if data is above or equal to `maxData`, then the view will rotate by `maxValue` degrees<br />Note that to apply this rotation, `rotationOffset` should be set to true within the view                               |
| `"dynValue"`*             | block  | Specify the dynValue conversion from min and max range to min and max values in pixels.<br />- It includes `minValue` key, `maxValue` Key and `invalidValue` key (optional)<br />- If data is below or equal `minData`, then the dynValue sent will be minValue (converted to double) , and if data is above or equal to `maxData`, then the dynValue calculated will be maxValue (converted to double)<br />Note that to apply this conversion, `dynValue` key should be set to true within the view |
| `"minValue"`              | int    | result value to apply to the view (key only applicable within a leftOffset, topOffset or rotationOffset block)                                                                                                                                                                                                                                                                                                                                                                                                          |
| `"maxValue"`              | int    | result value to apply to the view (key only applicable within a leftOffset, topOffset or rotationOffset block)                                                                                                                                                                                                                                                                                                                                                                                                          |
| `"invalidValue"`          | int    | result value to apply to the view if data is invalid (key only applicable within a leftOffset, topOffset or rotationOffset block)                                                                                                                                                                                                                                                                                                                                                                                       |
| `"invalidImage"`          | string | `resource_filename` to use for the ImageView or background TextView if the data is invalid                                                                                                                                                                                                                                                                                                                                                                                                                              |
| image*1_to_n*           | string | `resource_filename` image to use for each step between minData (or close to minData) with `"image1"` and maxData (or close to maxData) with image*n*<br />If for example your put 5 images (from image1 to image5), the range between minData and maxData will be divided in 5 steps and according to data value, the corresponding image will be shown                                                                                                                                                           |
| `"invalidFontColor"`      | string | Manage fontColor steps if the data is invalid<br />`"#RRVVBB"` or `"#AARRVVBB"`: Color to use if an invalid data is received (can be transparent if AA=00)                                                                                                                                                                                                                                                                                                                                                        |
| fontColor*1_to_n*       | string | Manage fontColor steps<br />`"#RRVVBB"` or `"#AARRVVBB"`: color to use for each step between minData (or close to minData) with `"fontColor1"` and maxData (or close to maxData) with fontColor*n*                                                                                                                                                                                                                                                                                                                |
| `"invalidColor"`          | string | Manage background color or image color steps if the data is invalid<br />`"#RRVVBB"` or `"#AARRVVBB"`: Color to use if an invalid data is received (can be transparent if AA=00)                                                                                                                                                                                                                                                                                                                                  |
| color*1_to_n*           | string | Manage background color or image Color steps<br />`"#RRVVBB"` or `"#AARRVVBB"`: color to use for each step between minData (or close to minData) with `"color1"` and maxData (or close to maxData) with color*n*                                                                                                                                                                                                                                                                                                  |
| `"invalidTextSize"`       | int    | Manage text size steps if the data is invalid                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| textsize*1_to_n*        | int    | Manage text size to use for each step between minData (or close to minData) with `"textsize1"` and maxData (or close to maxData) with textsize*n*                                                                                                                                                                                                                                                                                                                                                                       |
| `"invalidLeftOffset"`     | int    | Manage leftOffset steps if the data is invalid                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| leftOffset*1_to_n*      | int    | Manage leftOffset to use for each step between minData (or close to minData) with `"leftOffset1"` and maxData (or close to maxData) with leftOffset*n*<br />Note, can be used with dynPref to shift a view when another is hidden...                                                                                                                                                                                                                                                                              |
| `"invalidTopOffset"`      | int    | Manage topOffset steps if the data is invalid                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| topOffset*1_to_n*       | int    | Manage topOffset to use for each step between minData (or close to minData) with topOffset1 and maxData (or close to maxData) with topOffset*n*<br />Note, can be used with dynPref to shift a view when another is hidden...                                                                                                                                                                                                                                                                                     |
| `"invalidRotationOffset"` | int    | Manage rotationOffset steps if the data is invalid                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| rotationOffset*1_to_n*  | int    | Manage rotationOffset to use for each step between minData (or close to minData) with rotationOffset1 and maxData (or close to maxData) with rotationOffset*n*                                                                                                                                                                                                                                                                                                                                                          |
| `"invalidTextvalue"`*     | string | Manage textvalue if the data in invalid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| textvalue*1_to_n* *     | string | Manage texvalue to use for each step between minData (or close to minData) with textvalue1 and maxData (or close to maxData) with textvalue*n*<br />Note, can include formatting string if `"dynValue"` is set to true within view                                                                                                                                                                                                                                                                                |

**Key added in Custom Watchface V2.0 or above (available on AAPS 3.3.0 wear apk or above)*

(cwf-reference-dyndata-key-values)=

### DynData key values

| Key value                                                                                   | key      | comment                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"sgv"`<br/>`"sgv_Ext1"` *<br>`"sgv_Ext2"` *                                    | valueKey | default minData = 39 mgdl<br />default maxData = 400 mgdl<br />- Note that real maxData is linked to your sensor and units are always in mgdl for internal values                                                                                     |
| `"sgvLevel"`<br/>`"sgvLevel_Ext1"` *<br/>`"sgvLevel_Ext2"` *                    | valueKey | default minData = -1 (Hypo)<br />default maxData = 1 (Hyper)<br />if BG is within Range = 0                                                                                                                                                           |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *                 | valueKey | default minData = 1 (double Down)<br />default maxValue = 7 (double Up)<br />flat arrow data = 4<br />Error or missing data = 0 (??)                                                                                                            |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                             | valueKey | default minData = -25 mgdl<br />default maxData = 25 mgdl<br />- Note that real min and maxData can be above, and units are always mgdl for internal values                                                                                           |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *                 | valueKey | default minData = -25 mgdl<br />default maxData = 25 mgdl<br />- Note that real min and maxData can be above, and units are always mgdl for internal values                                                                                           |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *             | valueKey | default minData = 0 (Profile Target)<br />default maxData = 2 (Temp Target)<br />Target is adjusted byt the loop = 1<br/>Default or missing information = 0                                                                                     |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *                | valueKey | default minData = 0 U<br />default maxData = 500 U                                                                                                                                                                                                          |
| `"reservoirLevel"`*<br/>`"reservoirLevel_Ext1"` *<br/>`"reservoirLevel_Ext2"` * | valueKey | default minData = 0 (Standard Color)<br/>default maxData = 2 (Urgent Color)<br/>Warning Color = 1                                                                                                                                                     |
| `"uploader_battery"`                                                                        | valueKey | default minData = 0 %<br />default maxData = 100%                                                                                                                                                                                                           |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *           | valueKey | default minData = 0 %<br />default maxData = 100%                                                                                                                                                                                                           |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *                 | valueKey | default minData = 0 min<br />default maxData = 60 min                                                                                                                                                                                                       |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                                | valueKey | default minData = 0 min<br />default maxData = 28 min<br />- Note that status arrows are in green below 14 min and in red above 14 min so if you put 2 images, you can replace status background with your custom images with default min and maxData |
| `"day"`                                                                                     | valueKey | default minData = 1<br />default maxData = 31                                                                                                                                                                                                               |
| `"day_name"`                                                                                | valueKey | default minData = 1<br />default maxData = 7                                                                                                                                                                                                                |
| `"month"`                                                                                   | valueKey | default minData = 1<br />default maxData = 12                                                                                                                                                                                                               |
| `"week_number"`                                                                             | valueKey | default minData = 1<br />default maxData = 53                                                                                                                                                                                                               |

**Key added in Custom Watchface V2.0 or above (available on AAPS 3.3.0 wear apk or above)*

(cwf-reference-dynpref-keys)=

### DynPref keys

| Key              | type   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynPref"`      | block  | define the block of all dynamic preference blocks that will be used for the views. Generally after the last view or after the dynData block.<br />All the keys defined within this block will be used as key Value within view block:<br />`"dynPref": { dynPref blocks }`<br />and each block is defined by a custom name and several keys inside:<br />`"customName": { one dynPref block }`                                                                                                                 |
| `"dynPref"`      | string | *Within a view Block*<br />name of dynamic dynPref block to use (generally same that associated view key or associated preference).                                                                                                                                                                                                                                                                                                                                                                                              |
| `"dynPref"`      | string | *Within a partial dynData Block included into a dynPref Block*<br />name of dynamic dynPref block to use to complete the dynData block. This allow you to tune a dynData block according to several preferences                                                                                                                                                                                                                                                                                                                  |
| `"dynPrefColor"` | string | this key is specific to the main block with all main colors (highColor, midColor, lowColor, graph colors...). you will use it if you want to tune main colors according to preferences                                                                                                                                                                                                                                                                                                                                                 |
| `"prefKey"`      | string | specify the preference key Value that will be used to get user preferences (see [PrefKey values](#cwf-reference-prefkey-values) below). This key should be used within a `dynPref` block.<br />Then according to preference key, the `dynPref`block should contains as many keys than prefKey has values.<br />Note that most of the time preferences are "Boolean" so you should find within the dynPref block these two dynData blocks: <br />`"true": { dynData Block },`<br />`"false": { dynData Block }` |
| `"true"`         | block  | most preferences will set a boolean `"true"` or `"false"`. You will specify the dynData block to use if preference selected by user is true.<br />Note that if the block also contains a `"dynPref":`key, the dynData block will be merged with other block. This allow you to tune for example color according to one preference, and textsize according to another preference                                                                                                                                                  |
| `"false"`        | block  | most preferences will set a boolean `"true"` or `"false"`. You will specify the dynData block to use if preference selected by user is false.<br />Note that if the block also contains a `"dynPref":`key, the dynData block will be merged with other block. This allow you to tune for example color according to one preference, and textsize according to another preference                                                                                                                                                 |

(cwf-reference-prefkey-values)=

### PrefKey values

All keys included into [Preference keys](#cwf-reference-preference-keys) chapter above can be used to tune view parameters

You can also you these additional key below included into AAPS (Custom) specific parameters:

| Key                   | type    | comment                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_units"`         | boolean | *true*: if units selected on AAPS is mgdl<br />*false*: if units selected on AAPS is mmol                                                                                                                                                                                                                                                                     |
| `"key_dark"`          | boolean | *true*: to use a dark background<br />false: to use a light background<br />Note: this parameter is often use into previous AAPS watchfaces (AAPS, AAPS V2...)                                                                                                                                                                                          |
| `"key_match_divider"` | boolean | *true*: divider included into AAPS, AAPS v2 watchfaces will not be visible<br />*false*: divider included into AAPS, AAPS v2 watchfaces will be visible<br />Note: this setting is often combine with dark preference (using `dynPref` key into `dynData`block) to set text color (and background) on the same or opposite color than dark parameter... |
