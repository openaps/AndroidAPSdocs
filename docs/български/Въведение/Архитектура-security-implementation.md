Програмата се състои от различни плъгини. Всеки от тях трябва да притежава(extends) Fragment, да имплементира(implements) PluginBase, а също може да имплементира някой от интерфейсите(Interfaces). Примерна декларация на плъгин би изглеждала така: 

`public class ConfigBuilderFragment extends Fragment implements PluginBase, PumpInterface, ConstraintsInterface`

Всеки плъгин трябва да бъде разработен като самостоятелен код. Единствената редакция, която е необходима за интегрирането му с останалата част от програмата е в клас `MainActivity` и изглежда така:

`pluginsList.add(SourceXdripFragment.newInstance());`

Когато плъгина, който разработваме, трябва да се свърже с други плъгини, то това винаги трябва да става чрез клас `ConfigBuilder`. Например за да изпратим команда към помпата: 

```
PumpInterface pump = MainApp.getConfigBuilder().getActivePump();
PumpEnactResult result = pump.deliverTreatment(insulin, carbs);
```

[[/images/app_desing.png]]

Самият `ConfigBuilder` е един вид интерфейс за помпата(`PumpInterface`) и интерфейс за ограниченията(`ConstraintInterface`). Така чрез извикване на функцията `MainApp.getConfigBuilder().getActivePump()` `ConfigBuilder` ще върне себе си като резултат. Така като изпращате команда към помпата `ConfigBuilder` първо проверява за спазване на ограниченията и тогава изпраща същинската команда към драйвера на помпата.

Това позволява добавянето на специфични ограничения към програмата, без необходимост от промяна на останалия код. Например чрез създаването и регистрирането на този Fragment:

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
Ние ограничаваме размера на болус до 2 единици навсякъде в програмата.

`ConfigBuilder` винаги преминава през всички регистрирани интерфейси на ограничения ('ConstraintInterfaces') и избира най-ограничената стойност, преди да я предаде към  избрания драйвер на помпа.

Добавянето на драйвер на помпа може да включи интерфейса за ограниченията(ConstraintInterface) също, да зареди максималните стойности от помпата и да ги приложи като допълнително ограничение. Тогава например графичният интерфейс няма да позволи въвеждането на по-голям болус.
