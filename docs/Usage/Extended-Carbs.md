# Extended carbs / "eCarbs"

With a regular pump therapy, extended boluses are a good way to deal with fatty or otherwise slowly-absorbed meals which increase blood glucose longer than the insulin is in effect. In a loop context, however, extended boluses don't make as much sense (and pose technical difficulties), since they're basically a fixed high temporary basal rate, which goes against how the loop works, which is adjusting the basal rate dynamically.
The need to deal with such meals still exists though. Which is why AndroidAPS as of version 2.0 supports so called extended carbs or eCarbs.

eCarbs are carbs that are spilt up over several hours. This simulates how the carbs are absorbed and influence the blood glucose. With this information, the loop can administer SMBs to deal with those carbs, which can be seen as a dynamic extended bolus (this should also work without SMBs, but is probably less effective).
However, eCarbs aren't limited to fatty meals, but can be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like cortison.

To enter eCarbs, set a duration in the _Carbs_ dialog on the overview tab, the total carbs and optionally a time shift:

<img src="https://1.bp.blogspot.com/-gnWKSBIBO2g/WuTPV0Rya3I/AAAAAAAAAEg/BvqiZYrsuKcgbny5t1sHWlPS6feWq-xEwCLcBGAs/s1600/Screenshot_20180427-144305.png" width=400>

The eCarbs on the overview tab, note the carbs in brackets at the COB field, which shows the carbs in the future:

<img src="https://4.bp.blogspot.com/-sgc9XdUeaoQ/WuTPXxfaIuI/AAAAAAAAAEk/p7toa_aq_oIWWTnzoQFUPHt4JdPkaXrwwCLcBGAs/s1600/Screenshot_20180427-144324.png" width=400>

Carb entries which are in the future are coloured in dark orange on the treatment tab:

<img src="https://user-images.githubusercontent.com/1732305/38613978-e6d1748e-3d8b-11e8-9d62-154fe73443da.png" width=400>

***
A way to handle fat and protein with that feature is described here: https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html
***

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the _Enable SMB with COB_ preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the _calculator_ and then use the _carbs_ button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours. You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting _max minutes of basal to limit SMB to_ to make the algorithm more or less aggressive.
With low carb, high fat/protein meals it may be enough to only use eCarbs without manual boluses (see the blog post above).
