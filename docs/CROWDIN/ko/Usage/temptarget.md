(temp-targets)=

# 임시 목표

## 임시 목표는 무엇이며, 어떻게 설정할 수 있을까요?

With “Temp-Targets” (or short TT), you can change your blood glucose target for a certain time period. As these are mostly needed for activity, hypo (treatment carbs) or eating soon, you can configure default ones. To configure these one, you can go to the menu in the right corner on top and go to Preferences-> Other-> Default Temp-Targets.

![Set default temp targets](../images/TempTarget_Default.png)

To use one of the set “Default-Temp-Targets”, you can short click on your target in the right corner on the top in the overview-tab to show Temp Target dialog and click on Eating Soon, Activity or Hypo button, or use the shortcuts in the orange “Carbs” button. To manually set a [“Custom Temp-Target”](../Usage/temptarget.md#custom-temp-target) (BG value and/or duration), short click on your target in the top right corner or use the “Temporary Target“ button in the [actions tab / menu](../Configuration/Config-Builder#actions).

![Set temp target](../images/TempTarget_Set2.png)

- If you want to slightly adjust the values of a default temp target, you can long press the Eating Soon, Activity or Hypo button and then edit the values in the Target or Duration fields.
- If a Temp target is running, an additional "Cancel" button is shown in dialog to cancel it

## 저혈당 임시 목표

This can be considered as the most important Temp-Target. There are several reasons for it:

1. 혈당이 낮아지고 있는 것을 인식했을 때: 보통은 loop이 이를 조절할 수 있지만, 때때로 사용자가 loop보다 먼저 인지할 수도 있습니다. 따라서 목표 혈당값을 높게 설정하면 loop가 보다 빠르게 반응할 수 있습니다.
2. 저혈당 교정 탄수화물 섭취 시, 혈당이 급격히 상승할 수 있습니다. Loop은 이러한 혈당 상승을 교정하거나, SMB가 활성화 되었을 경우 작동시킬 수 있습니다. "저혈당 임시 목표"는 이를 방지할 수 있습니다. 
3. (advanced, [objective 9](../Usage/Objectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can enable “High Temp-Targets raises sensitivity” for Temp-Targets of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, so AndroidAPS is more sensitive.
4. (advanced, [objective 9](../Usage/Objectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can deactivate “SMB with high temp target”, so that even if you have COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active, AndroidAPS won’t give SMBs while high temp targets are active.

Note: if you enter carbs with the carb button and your blood glucose is less then 72mg/dl or 4mmol/l, Hypo TT is automatically enabled.

(activity-temp-target)=

## 활동 임시 목표

Before and during activity, you might want to have a higher target to prevent getting low. To simplify setting the Temp-Target, you can configure a default "Activity Temp-Target". Based on DIA, IOB and your experience you might want to set TT prior to activity. See also [sports section in FAQ](../Getting-Started/FAQ.md#sports).

Advanced, [objective 9](../Usage/Objectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. Then AndroidAPS is more sensitive. Some people do instead a profile switch before/while activity TT, but everybody is different. If “SMB with high Temp-Target” is deactivated, AndroidAPS won't use SMBs, even with COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active.

## 식사 직전 임시 목표

If you know, that you want to eat soon, you can enable this Temp-Target, so there is already more IOB before eating. Especially for those who don’t do prebolusing, it might be a good alternative to already get the blood glucose to a lower target. You can read more about the "Eating soon mode" in the article ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) or [here](https://diyps.org/tag/eating-soon-mode/).

Advanced, [objective 9](../Usage/Objectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have “Low temptarget lowers sensitivity”, AndroidAPS works a little bit more aggressive. Requirement is a Temp-Target less than 100mg/dl or 5.5mmol/l for this option.

## 사용자 지정 임시 목표

Sometimes, you just want to have a temp target other than the default ones. You can set one by short pressing on the target (range) on the right corner in overview or in the “Action”-Tab.

![Set temp target through Action tab](../images/TempTarget_ActionTab.png)