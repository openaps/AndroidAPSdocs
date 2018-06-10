This page is obsolete now

Application is built from plugins.
Every plugin must `extends` Fragment and must `implements` PluginBase and may `implements` Interfaces. 
So declaration looks like:

`public class ConfigBuilderFragment extends Fragment implements PluginBase, PumpInterface, ConstraintsInterface`

Every plugin must be designed as standalone code. The only edit needed for integration with the rest of app is in `MainActivity` class and looks like 

`pluginsList.add(SourceXdripFragment.newInstance());`

When plugin needs to cooperate with other plugins it always has to go through `ConfigBuilder` class. For example to send command to pump:
```
PumpInterface pump = MainApp.getConfigBuilder().getActivePump();
PumpEnactResult result = pump.deliverTreatment(insulin, carbs);
```

[[/images/app_desing.png]]

`ConfigBuilder` itself acts as `PumpInterface` and `ConstraintInterface`. So when you call `MainApp.getConfigBuilder().getActivePump()` `ConfigBuilder` return itself. Then when you interact with pump `ConfigBuilder` verifies constraints first and then pass command to selected pump driver.

This allows to add specific constraints to app without touching the rest of code. For example creating and registering this Fragment:
```
public class BolusConstraint extends Fragment implements PluginBase, ConstraintsInterface {
    @Override
    public boolean isLoopEnabled() {
        return true; // Always enable, limit only things you want
    }

    @Override
    public boolean isClosedModeEnabled() {
        return true; // Always enable, limit only things you want
    }

    @Override
    public boolean isAutosensModeEnabled() {
        return true; // Always enable, limit only things you want
    }

    @Override
    public boolean isAMAModeEnabled() {
        return true; // Always enable, limit only things you want
    }

    @Override
    public APSResult applyBasalConstraints(APSResult request) {
        return request; // Don't change, limit only things you want
    }

    @Override
    public Double applyBasalConstraints(Double absoluteRate) {
        return absoluteRate; // Don't change, limit only things you want
    }

    @Override
    public Integer applyBasalConstraints(Integer percentRate) {
        return percentRate; // Don't change, limit only things you want
    }

    @Override
    public Double applyBolusConstraints(Double insulin) {
        if (insulin > 2d) insulin = 2d;
        return insulin;
    }

    @Override
    public Integer applyCarbsConstraints(Integer carbs) {
        return carbs; // Don't change, limit only things you want
    }

    @Override
    public Double applyMaxIOBConstraints(Double maxIob) {
        return maxIob; // Don't change, limit only things you want
    }

    @Override
    public int getType() {
        return PluginBase.CONSTRAINTS;
    }

    @Override
    public String getName() {
        return "Bolus Constraint";
    }

    @Override
    public boolean isEnabled() {
        return true; // Always enabled and cannot be disabled
    }

    @Override
    public boolean isVisibleInTabs() {
        return false; // No need to have own tab in GUI
    }

    @Override
    public boolean canBeHidden() {
        return true;
    }

    @Override
    public void setFragmentEnabled(boolean fragmentEnabled) {
        // Do nothing, always enabled
    }

    @Override
    public void setFragmentVisible(boolean fragmentVisible) {
        // Do nothing, always hidden
    }
}
```
we limit maximal bolus to 2U everywhere in app.

`ConfigBuilder` always goes through all registered ConstraintInterfaces and select most restrictive value before passing command to selected pump driver.

Added pump driver can implement ConstraintInterface too, load max values from pump and provide it as another constraint. GUI then doesn't allow entering higher bolus for example