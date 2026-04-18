# Insulin Concentration

<font color="#FF0000">**Attention:**</font>All commercial pumps are designed to be used with Insulin U100 **ONLY**. Using other insulin concentration within a pump can be dangerous. Even if more and more users use AAPS with other insulin concentration, convertion must always be managed and often lead to errors (even with very skilled users!).

## Reminder of the basics of Insulin 

This chapter covers the essential concepts of insulin measurement and delivery.

### The Insulin Unit: a measure of Action

Insulin is measured in **International Units (IU)**, which quantify its biological activity (power to lower blood sugar), not just its physical mass.

- **Definition:** 1 IU corresponds to the activity of a specific amount of insulin, standardized to **approximately 0.04167 mg**.
- **Key Point:** A "unit" means the same biological effect across all insulin types, ensuring consistent dosing.

### Insulin Concentrations

Insulin comes in different strengths, defined by the number of units per milliliter (ml).

- **U100:** The global standard, containing **100 IU/ml**.
- **U200-U500:** More concentrated insulins (e.g., U200 has 200 IU/ml) for smaller injection volumes.
- **U40:** Less common, historical concentrations (40 IU/ml & 50 IU/ml). **U40 requires U40-specific syringes.**
- **Manual Dilution:** A clinical practice to create highly diluted insulin (e.g., U50, U10) for rare cases like neonatal use or extreme sensitivity. This requires meticulous pharmacy preparation.

**⚠️ Critical Warning:** Using a concentration with a non-matching device is extremely dangerous and can cause a severe overdose or underdose. **Always triple-check that the insulin concentration matches the syringe, pen, or pump specifications.**

## When using non standard concentration?

While insulin pumps are designed for U100 insulin, certain specific medical situations necessitate the use of non-standard concentrations. These scenarios require extreme caution and meticulous management.

#### **Use Case 1: Diluted Insulin for Very Low Doses**

- **Scenario:** Managing type 1 diabetes in very young babies and toddlers.
- **Problem:** Their insulin needs are so low that the pump's minimum deliverable dose (e.g., 0.05 U) may still be too large, leading to difficulty in achieving precise glycemic control and a high risk of hypoglycemia.
- **Solution:** Using highly diluted insulin (e.g., U10, which is 10 IU/ml).
- **Effect:** This increases the volume of fluid delivered per unit of insulin. By making the "packages" of insulin larger in volume but weaker in concentration, it allows for much finer adjustments and greater dosing accuracy with the pump's existing settings.

**⚠️ Critical Safety Note on Dilution:** Insulin dilution is a high-risk procedure that must never be attempted at home without specific training and medical supervision. It must be performed by a healthcare professional or a trained caregiver using sterile diluent specifically designed for that insulin type. **Never use tap water, saline, or any other fluid**, as this can deactivate the insulin, alter its action, and introduce dangerous contaminants.

#### **Use Case 2: Concentrated Insulin for High Needs or Sensitivity**

- **Scenario:** Managing adults or adolescents with significant insulin resistance, or individuals who experience localized pain from the additives in standard insulin.
- **Problem:**
  1. **High Needs:** Very high daily insulin requirements can exceed the pump's maximum bolus or daily delivery limits.
  2. **Pain:** The preservatives in insulin can cause stinging or irritation upon infusion.
- **Solution:** Using a more concentrated insulin, such as U200 (200 IU/ml).
- **Effect:** This delivers the required insulin dose in half the volume. For the user, this means the pump's internal settings must be adjusted (e.g., basal rates and boluses halved) to account for the doubled concentration, ensuring the correct number of units are delivered. This also reduces the volume of potentially irritating fluid delivered subcutaneously.

## How to manage Insulin Concentration with AAPS (V3 and earlier) ?

Using non-U100 insulin in an AAPS loop requires meticulous configuration to align the software's calculations with the actual insulin being delivered. One common method is "Using a Modified Profile."

### Using a Modified Profile

This method involves tricking AAPS into thinking the patient's insulin needs are lower than they are, to compensate for the pump delivering more concentrated insulin than it is designed for. The use-case below will be for U200 concentration put into the Pump, designed for U100.

- **The Core Problem:** A pump designed for U100 is calibrated to deliver a **10 µL** for **1 Unit**. If you fill it with U200 (1 Unit of U200 correspond to **5 µL** of insulin), when you select **1 Unit** in the pump, it will delivers **10 µL** of insulin, but that volume now contains **2 Units of U200 insulin**. This leads to a 100% overdose.
- **The "Profile Switch 50%" Solution:** 
  To correct this, the patient's entire therapy profile is scaled to be "twice as weak" inside AAPS.
  1. The user creates a new profile based on their standard U100 profile, using the "Profile Switch **50%**" function.
  2. This creates a new profile where:
     - **Basal Rates** are halved.
     - **Insulin-to-Carb Ratio (IC)** is doubled (e.g., 1:10g becomes 1:20g).
     - **Insulin Sensitivity Factor (ISF)** is doubled (e.g., 1 Unit lowers BG by 50 mg/dL becomes 1 Unit lowers it by 100 mg/dL).
- **The Corrected Result:**
   AAPS now believes the patient only needs half the insulin. When it calculates and commands a **1-Unit** bolus, the pump (designed for U100 but filled with U200) delivers the **10 µL**, which contains **2 real units of U200 insulin**. Because AAPS calculated this dose based on a "half-strength" profile, this **2 real-unit** delivery is the correct, intended dose. The loop's "half-strength" math aligns with the pump's "double-strength" delivery.

#### ⚠️ Critical Risks and Common Errors

This method introduces significant risks by creating a persistent disconnect between the app's data and physical reality.

**The Primary Error: The "External Bolus" Mismatch**

The most common mistake occurs when delivering and logging insulin **outside** of the AAPS-pump system.

- **The Scenario:** AAPS, using the modified profile, calculates a **5-unit** bolus for a meal. The user injects this with a U200 pen.
- **The Dual Error:**
  1. **Wrong Dose Selection:** The user thinks "AAPS calculate 5 units" and think because of Pen U200 he can deliver **5 real units of U200** with the pen without any convertion. However, because the profile is halved, the body actually needs **10 real units**. This is a **50% underdose**, which can lead to hyperglycemia.
  2. **Wrong IOB Calculation (Overestimated IOB):** Then the user records this external bolus in AAPS, they log **5 units**. This is incorrect. Since the AAPS profile is for U200, **1 unit in AAPS equals 2 real units**. Therefore, the 5 real units delivered by the pen should be logged as **2.5 units** in the app. By logging 5 units, the user is **overestimating the IOB by 100%**. AAPS now thinks there are 5 "concentrated units" on board (equivalent to 10 real units) when only 5 real units are active. This can cause the loop to suppress basal insulin or reduce future boluses, worsening the hyperglycemia risks from the initial underdose.

**Other Risks:**

- **Misleading Data and Reports:** All data within AAPS or NightScout - including IOB, total daily dose (TDD), and historical reports - is in "concentrated units". This provides a distorted picture to the user and their medical team. A doctor reviewing a report might see a TDD of 30 units and not realize the patient actually received 60 real units, leading to incorrect therapy assessments.
- **Altered Mental Model:** After prolonged use, the user begins to "think" in the app's halved values. They internalize that their ISF is 100 mg/dL or their basal is 0.5 U/hr, forgetting these are "concentrated". This creates a dangerous dependency on the system and a loss of touch with their actual insulin requirements, which is critical for safety during pump failures or app issues.

**Conclusion:** This method requires absolute vigilance, forcing the user to constantly convert between a "concentrated world" in the app and the physical world. Any external insulin delivery or data review breaks this mental model and poses a severe risk. It fundamentally changes the meaning of every number in the system.

## Using Concentration Parameter (new feature in 4.0)

To mitigate the risks of using a modified profile, a new feature has been developed to manage insulin concentration directly within AAPS. This feature handles the conversions automatically, allowing the main application to always work in **Real International Units (IU)**.

### **How It Works: Automatic Conversion**

The core principle is a clear separation between the app's logic and the pump's communication:

- **AAPS Uses International Units:** The main AAPS database, algorithms, reports, and logs **always use Real IU**. This means your Insulin-on-Board (IOB), Total Daily Dose (TDD), and therapy settings (basal, ISF, I:C) reflect the actual biological insulin units.
- **Pump Driver Uses Concentrated Units:** All values sent to or received from the pump driver are automatically converted to manage "Concentrated Units" within pump driver, based on the selected concentration.
  - **Example with U200:** When the user requests for a **1 Unit bolus**, the pump driver receive **0.5 CU (Concentrated Units)** before sending it to the pump. The pump (set for U100) then delivers **5 µL**, which contains **1 IU of U200 insulin**.

### **Benefits and Remaining Risks**

**Benefits:**

- Eliminates the need for a modified profile and its associated mental conversion errors.
- Users can always "think" in Real IU.
- If you want to do an External bolus with a Pen, you just have to select the expected amount of insulin on the pen (whatever the pen used and insulin concentration). No need to do any convertion (pen  U100 ou U200 always use IU for Unit selection, so no conversion is needed)
- All AAPS reports and data (TDD, IOB) are in Real IU, providing clarity for the user and their medical team.
- Removes the risk of miscalculating external boluses, as they are logged in Real IU.

**Remaining Risks:**

- **Mental Model Transition:** Users switching from the "modified profile" method will have to switch back their profile to the correct real profile (i.e. twice stronger if they comes from U200), and will need time to adjust their **mental model**. After being accustomed to "Concentrated" values in the app, they must now re-learn to trust the **real, unhidden IU values** displayed everywhere. This period of adjustment carries a risk of misinterpretation.
- **Manual Pump Bolus:** Using the pump's own bolus function (bypassing AAPS) will result in a 100% overdose, as the pump delivers U200 insulin using U100 volume calculations.
- **General Warning:** Using non-standard concentrations remains an advanced procedure with risks and is not officially recommended.

##### ⚠️ Critical Risks: Never use Pump User Interface (tube pump users) to deliver a bolus manually. Advice is to stick a permanent not on your pump "U200 Insulin" as a reminder to never forget it!

### **User Interface Display**

To provide clarity, the user interface has been updated in many areas to show both real and concentrated units where relevant. Note that user interface remains unchanged if current insulin is U100.

**Display Examples:**

- **Bolus Progress Dialog:**
  - Bolus Progress dialog is within core AAPS application, so only the information in IU is presented (consistent withe the user selection): **`2.50 U / 10.00 U delivered`**
- **Pump Driver Interface (Current Status):**
  - Within Pump overview, the delivered amount is presented with both Units: **`Last Bolus: 10 U (5 CU) (10')`**

**Please Note:** Both units (U and CU) are only visible into the main Pump overview. Depending on your specific pump, you can have other screens where only the Concentrated Units. Historical data within pump drivers will typically remain in "Concentrated Units"

### **Enabling the Feature**

Due to the inherent safety risks, this parameter is not enabled by default. To activate it, the user should finish Objective 3 and enable **Insulin concentration support** within General Settings.

### Create a new Insulin with another concentration

To create an insulin with another concentration, first open Insulin Manager

- Click on "+" icon in the bottom of the screen
- Adjust select into the dropdown menu the new expected concentration (U10, U50, U100, U200 are available)
  - diluted concentrations like U10 or U50 are for children with very low basal rates
  - U200 is more for adult with important insulin needs
- Adjust peak time, DIA, and customize Insulin Nickname (optional)
- Then use the save button on the top right of the screen

At this step the insulin has been created, but cannot be selected directly from Insulin Manager.

### Switch concentration From U100 to Uxxx (AAPS V4)

#### **Note: For safety reason, switch concentration is only allowed during a Reservoir Change or Patch/Pod Change**

When you start from U100 insulin, all your profile, historical data, reports are consistent with the International Units standards. so the switch is very "easy":

You have a dedicated step when you change Patch/Pod pump, to select the Insulin you put into the pump

If you use a tube pump, then you can click on the Prime/Fill button (for Insulin Change) within the Overview (expended status bar view) and click on "Change" button

1. Select first the target concentration in the dropdown menu (i.e. `U200`)

2. Then select below the right insulin

3. **Important, the confirmation of concentration switch is only recorded within AAPS after the Profile Switch applied into the pump** 

   - This step is mandatory for all patch/Pod pumps

   - Concerning Tube Pumps, it's important to wait for the application of the profile switch into the pump or within Profile Manager or Insulin Manager

That's all!

### Switch concentration for users with U200 insulin associated to a profile 50% as standard profile (AAPS V4)

When you start from U200 already used in your pump, but associated with a profile 50%, you will have to do additional steps compared to the standard switch from U100 insulin.

Keep in mind that the most difficult part will probably not be how to manage the switch correctly within AAPS, but probably more to train again your brain to think "IU" instead of "CU": All standard values for boluses (breakfasts, lunch, dinner...) will be twice higher, same for your your TDDs, basal rates etc. You will have to be very cautious to not make error or mistakes dunring several weeks, until you "think again" in International Units

- First you will have to prepare a new profile with all values consistent with International Units:
  - Do a temp Profile Switch 200% of your standard running profile
  - Go in Treatments > Profile and clone the new Profile 200%
  - Of course switch back to your standard profile until the next Reservoir or Patch change
  - Go within Profile manager and rename this new profile with an explicit name (it will be your future profile associated with Insulin U200 set in AAPS V4)

- If you are using DynISF feature, you will have to disable it during at least one week:
  - All your history recorded within AAPS or NS is in wrong units (CU), half lower than the real value in International Units. You will have to wait minimum one week with U200 insulin running associated

- You are now prepared to switch Insulin (with a new U200 defined within Insulin manager) on the following Insulin Change or Pod Change
- Once the new Insulin U200 is correctly applied, don't forget to apply the new standard profile defined on the first step

## How to manage external boluses with different pens ?

### With U200 insulin associated with a Profile 50% (AAPS V3)

Keep in mind that all pens graduations are in International Units, so whatever the pen used (U100, U200), if you use a pen for an external bolus, you will have to manage conversion in both direction:

- From AAPS to the Pen: if the Calculator propose a bolus, or if you have in mind a dedicated quantity, you will have to multiply by 2 when you select the amount in the pen, compared to the same bolus applied from AAPS
- From the Pen to AAPS: if you selected an amount within the pen to provide an external bolus, you will have to divide by 2 this amount to record the right quantity within AAPS, Insulin button (external bolus), to have to correct IOB calculation in CU (Concentrated Units)

### With U200 insulin using concentration management included in AAPS V4

Things are much more simple with the internal management of concentration within AAPS: just select the expected amount in the Pen (whatever the pen used and corresponding Insulin), and record it within AAPS.

- Within Insulin Button, if you select an external bolus, you can select any type of insulin defined within Insulin Manager (mainly U100, U200 for pens), that way you can have calculated IOB very precise, event if Peak/Dia of the insulin used with the Pen is very different to peak/dia used into the pump..

