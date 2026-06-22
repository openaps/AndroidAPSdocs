# Insulin Concentration

```{warning}
All commercial pumps are designed to be used with Insulin U100 **ONLY**. Using another insulin concentration in a pump can be dangerous. Although more and more users run AAPS with other concentrations, the conversion must always be managed and often leads to errors (even for very skilled users!).
```

## Reminder of the basics of insulin

This chapter covers the essential concepts of insulin measurement and delivery.

### The insulin unit: a measure of action

Insulin is measured in **International Units (IU)**, which quantify its biological activity (power to lower blood sugar), not just its physical mass.

- **Definition:** 1 IU corresponds to the activity of a specific amount of insulin, standardized to **approximately 0.04167 mg**.
- **Key Point:** A "unit" means the same biological effect across all insulin types, ensuring consistent dosing.

### Insulin concentrations

Insulin comes in different strengths, defined by the number of units per millilitre (ml).

- **U100:** The global standard, containing **100 IU/ml**.
- **U200-U500:** More concentrated insulins (e.g. U200 has 200 IU/ml) for smaller injection volumes.
- **U40:** Less common, historical concentrations (40 IU/ml and 50 IU/ml). **U40 requires U40-specific syringes.**
- **Manual Dilution:** A clinical practice to create highly diluted insulin (e.g. U50, U10) for rare cases like neonatal use or extreme sensitivity. This requires meticulous pharmacy preparation.

```{admonition} Critical Warning
:class: danger
Using a concentration with a non-matching device is extremely dangerous and can cause a severe overdose or underdose. **Always triple-check that the insulin concentration matches the syringe, pen, or pump specifications.**
```

## When using a non-standard concentration?

While insulin pumps are designed for U100 insulin, certain specific medical situations require non-standard concentrations. These scenarios require extreme caution and meticulous management.

### Use Case 1: diluted insulin for very low doses

- **Scenario:** Managing type 1 diabetes in very young babies and toddlers.
- **Problem:** Their insulin needs are so low that the pump's minimum deliverable dose (e.g. 0.05 U) may still be too large, leading to difficulty in achieving precise glycemic control and a high risk of hypoglycemia.
- **Solution:** Use highly diluted insulin (e.g. U10, which is 10 IU/ml).
- **Effect:** This increases the volume of fluid delivered per unit of insulin. By making the "packages" of insulin larger in volume but weaker in concentration, it allows much finer adjustments and greater dosing accuracy with the pump's existing settings.

```{admonition} Critical Safety Note on Dilution
:class: danger
Insulin dilution is a high-risk procedure that must never be attempted at home without specific training and medical supervision. It must be performed by a healthcare professional or a trained caregiver using sterile diluent specifically designed for that insulin type. **Never use tap water, saline, or any other fluid**, as this can deactivate the insulin, alter its action, and introduce dangerous contaminants.
```

### Use Case 2: concentrated insulin for high needs or sensitivity

- **Scenario:** Managing adults or adolescents with significant insulin resistance, or individuals who experience localized pain from the additives in standard insulin.
- **Problem:**
  1. **High Needs:** Very high daily insulin requirements can exceed the pump's maximum bolus or daily delivery limits.
  1. **Pain:** The preservatives in insulin can cause stinging or irritation upon infusion.
- **Solution:** Use a more concentrated insulin, such as U200 (200 IU/ml).
- **Effect:** This delivers the required insulin dose in half the volume. For the user, the pump's internal settings must be adjusted (e.g. basal rates and boluses halved) to account for the doubled concentration, ensuring the correct number of units are delivered. This also reduces the volume of potentially irritating fluid delivered subcutaneously.

## How to manage insulin concentration with AAPS (AAPS 3 and earlier)?

Using non-U100 insulin in an AAPS loop requires meticulous configuration to align the software's calculations with the actual insulin being delivered. One common method is "Using a Modified Profile".

### Using a modified profile

This method involves tricking AAPS into thinking the patient's insulin needs are lower than they are, to compensate for the pump delivering more concentrated insulin than it is designed for. The use case below is for U200 concentration put into the pump, designed for U100.

- **The Core Problem:** A pump designed for U100 is calibrated to deliver **10 µL** for **1 unit**. If you fill it with U200 (1 unit of U200 corresponds to **5 µL** of insulin), when you select **1 unit** on the pump it delivers **10 µL** of insulin, but that volume now contains **2 units of U200 insulin**. This leads to a 100% overdose.
- **The "Profile Switch 50%" Solution:**
  To correct this, the patient's entire therapy profile is scaled to be "twice as weak" inside AAPS.
  1. The user creates a new profile based on their standard U100 profile, using the "Profile Switch **50%**" function.
  1. This creates a new profile where:
     - **Basal rates** are halved.
     - **Insulin-to-Carb Ratio (IC)** is doubled (e.g. 1:10g becomes 1:20g).
     - **Insulin Sensitivity Factor (ISF)** is doubled (e.g. 1 unit lowers BG by 50 mg/dL (2.8 mmol/L) becomes 1 unit lowers it by 100 mg/dL (5.6 mmol/L)).
- **The Corrected Result:**
   AAPS now believes the patient only needs half the insulin. When it calculates and commands a **1-unit** bolus, the pump (designed for U100 but filled with U200) delivers the **10 µL**, which contains **2 real units of U200 insulin**. Because AAPS calculated this dose based on a "half-strength" profile, this **2 real-unit** delivery is the correct, intended dose. The loop's "half-strength" math aligns with the pump's "double-strength" delivery.

```{admonition} Critical Risks and Common Errors
:class: caution

This method introduces significant risks by creating a persistent disconnect between the app's data and physical reality.

**The Primary Error: The "External Bolus" Mismatch**

The most common mistake occurs when delivering and logging insulin **outside** of the AAPS-pump system.

- **The Scenario:** AAPS, using the modified profile, calculates a **5-unit** bolus for a meal. The user injects this with a U200 pen.
- **The Dual Error:**
  1. **Wrong Dose Selection:** The user thinks "AAPS calculates 5 units" and, because of the U200 pen, expects to deliver **5 real units of U200** without any conversion. However, because the profile is halved, the body actually needs **10 real units**. This is a **50% underdose**, which can lead to hyperglycemia.
  1. **Wrong Insulin-on-Board (IOB) Calculation (Overestimated IOB):** When the user records this external bolus in AAPS, they log **5 units**. This is incorrect. Since the AAPS profile is for U200, **1 unit in AAPS equals 2 real units**. Therefore, the 5 real units delivered by the pen should be logged as **2.5 units** in the app. By logging 5 units, the user overestimates the IOB by 100%. AAPS now thinks there are 5 "concentrated units" on board (equivalent to 10 real units) when only 5 real units are active. This can cause the loop to suppress basal insulin or reduce future boluses, worsening the hyperglycemia risk from the initial underdose.

**Other Risks:**

- **Misleading Data and Reports:** All data within AAPS or Nightscout - including IOB, total daily dose (TDD), and historical reports - is in "concentrated units". This gives a distorted picture to the user and their medical team. A doctor reviewing a report might see a TDD of 30 units and not realize the patient actually received 60 real units, leading to incorrect therapy assessments.
- **Altered Mental Model:** After prolonged use, the user begins to "think" in the app's halved values. They internalize that their ISF is 100 mg/dL (5.6 mmol/L) or their basal is 0.5 U/hr, forgetting these are "concentrated". This creates a dangerous dependency on the system and a loss of touch with their actual insulin requirements, which is critical for safety during pump failures or app issues.

**Conclusion:** This method requires absolute vigilance, forcing the user to constantly convert between a "concentrated world" in the app and the physical world. Any external insulin delivery or data review breaks this mental model and poses a severe risk. It fundamentally changes the meaning of every number in the system.
```

## Using the concentration parameter (new feature in AAPS 4.0)

To mitigate the risks of using a modified profile, a new feature manages insulin concentration directly within AAPS. This feature handles the conversions automatically, allowing the main application to always work in **Real International Units (IU)**.

### How it works: automatic conversion

The core principle is a clear separation between the app's logic and the pump's communication:

- **AAPS Uses International Units:** The main AAPS database, algorithms, reports, and logs **always use Real IU**. This means your IOB, TDD, and therapy settings (basal, ISF, IC) reflect the actual biological insulin units.
- **Pump Driver Uses Concentrated Units:** All values sent to or received from the pump driver are automatically converted to manage "Concentrated Units" within the pump driver, based on the selected concentration.
  - **Example with U200:** When the user requests a **1 unit bolus**, the pump driver receives **0.5 CU (Concentrated Units)** before sending it to the pump. The pump (set for U100) then delivers **5 µL**, which contains **1 IU of U200 insulin**.

### Benefits and remaining risks

**Benefits:**

- Eliminates the need for a modified profile and its associated mental conversion errors.
- Users can always "think" in Real IU.
- For an external bolus with a pen, just select the expected amount of insulin on the pen (whatever the pen and insulin concentration used). No conversion is needed, as pens U100 and U200 always use IU for unit selection.
- All AAPS reports and data (TDD, IOB) are in Real IU, providing clarity for the user and their medical team.
- Removes the risk of miscalculating external boluses, as they are logged in Real IU.

**Remaining Risks:**

- **Mental Model Transition:** Users switching from the "modified profile" method must switch their profile back to the correct real profile (i.e. twice as strong if they come from U200), and need time to adjust their **mental model**. After being accustomed to "Concentrated" values in the app, they must re-learn to trust the **real, unhidden IU values** displayed everywhere. This period of adjustment carries a risk of misinterpretation.
- **Manual Pump Bolus:** Using the pump's own bolus function (bypassing AAPS) results in a 100% overdose, as the pump delivers U200 insulin using U100 volume calculations.
- **General Warning:** Using non-standard concentrations remains an advanced procedure with risks and is not officially recommended.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Stick a permanent note on your pump **"U200 Insulin"** as a reminder, to never forget it!
```

### User interface display

To provide clarity, the user interface shows both real and concentrated units where relevant. Note that the user interface remains unchanged if the current insulin is U100.

**Display Examples:**

- **Bolus Progress Dialog:**
  - The Bolus Progress dialog is within the core AAPS application, so only the information in IU is presented (consistent with the user selection): **`2.50 U / 10.00 U delivered`**
- **Pump Driver Interface (Current Status):**
  - Within Pump overview, the delivered amount is presented with both units: **`Last Bolus: 10 U (5 CU) (10')`**

**Please Note:** Both units (U and CU) are only visible in the main Pump overview. Depending on your specific pump, you can have other screens where only the Concentrated Units are shown. Historical data within pump drivers will typically remain in "Concentrated Units".

### Enabling the feature

Due to the inherent safety risks, this parameter is not enabled by default. To activate it, finish Objective 3 and enable **Insulin concentration support** within General Settings.

### Create a new insulin with another concentration

To create an insulin with another concentration, first open Insulin Manager.

- Click the "+" icon at the bottom of the screen.
- Select the new expected concentration from the dropdown menu (U10, U50, U100, U200 are available).
  - diluted concentrations like U10 or U50 are for children with very low basal rates.
  - U200 is more for adults with high insulin needs.
- Adjust peak time, Duration of Insulin Action (DIA), and customize the Insulin Nickname (optional).
- Use the save button at the top right of the screen.

At this step the insulin has been created, but cannot be selected directly from Insulin Manager.

### Switch concentration from U100 to Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
For safety reasons, AAPS only records a concentration switch during a Reservoir Change or Patch/Pod Change.
```

When you start from U100 insulin, all your profile, historical data and reports are consistent with the International Units standard, so the switch is very "easy":

- For a Patch/Pod pump, you have a dedicated step when you change the pump, to select the insulin you put into it.
- For a tube pump, click the Prime/Fill button (for Insulin Change) within the Overview (expanded status bar view), then click the "Change" button.

1. Select the target concentration in the dropdown menu (e.g. `U200`).
1. Then select the right insulin below.
1. **Important:** the concentration switch is only recorded within AAPS after the Profile Switch is applied to the pump.
   - This step is mandatory for all Patch/Pod pumps.
   - For tube pumps, wait for the Profile Switch to be applied to the pump, or within Profile Manager or Insulin Manager.

That's all!

### Switch concentration for users with U200 insulin associated with a 50% profile (AAPS 4)

When you start from U200 already used in your pump, but associated with a 50% profile, you have to do additional steps compared to the standard switch from U100 insulin.

Keep in mind that the most difficult part will probably not be how to manage the switch correctly within AAPS, but rather to train your brain again to think "IU" instead of "CU". All standard values for boluses (breakfast, lunch, dinner...) will be twice as high, the same for your TDDs, basal rates, etc. You have to be very cautious not to make errors during the first several weeks, until you "think again" in International Units.

- First, prepare a new profile with all values consistent with International Units:
  - Do a temporary Profile Switch 200% of your standard running profile.
  - Go to Treatments > Profile and clone the new 200% profile.
  - Switch back to your standard profile until the next Reservoir or Patch change.
  - Go to Profile Manager and rename this new profile with an explicit name (it will be your future profile associated with U200 insulin set in AAPS 4).
- If you use the Dynamic ISF (DynISF) feature, you have to disable it for at least one week:
  - All your history recorded within AAPS or Nightscout is in the wrong units (CU), half the real value in International Units. Wait at least one week with the U200 insulin running before re-enabling it.
- You are now ready to switch insulin (with a new U200 defined within Insulin Manager) on the following Insulin Change or Pod Change.
- Once the new U200 insulin is correctly applied, don't forget to apply the new standard profile defined in the first step.

## How to manage external boluses with different pens?

### With U200 insulin associated with a 50% profile (AAPS 3)

Keep in mind that all pen graduations are in International Units, so whatever the pen used (U100, U200), if you use a pen for an external bolus you have to manage conversion in both directions:

- From AAPS to the pen: if the Calculator proposes a bolus, or if you have a specific quantity in mind, multiply by 2 when you select the amount on the pen, compared to the same bolus applied from AAPS.
- From the pen to AAPS: if you selected an amount on the pen to give an external bolus, divide this amount by 2 to record the right quantity within AAPS (Insulin button, external bolus), to get the correct IOB calculation in CU (Concentrated Units).

### With U200 insulin using the concentration management included in AAPS 4

Things are much simpler with the internal management of concentration within AAPS: just select the expected amount on the pen (whatever the pen and corresponding insulin used), and record it within AAPS.

- Within the Insulin button, if you select an external bolus, you can select any type of insulin defined within Insulin Manager (mainly U100, U200 for pens). That way you get a very precise calculated IOB, even if the peak/DIA of the insulin used with the pen is very different from the peak/DIA used in the pump.
