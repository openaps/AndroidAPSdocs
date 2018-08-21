# Timezone traveling with pumps

## DanaR, Korean DanaR

There is no issue with changing timezone in phone because pump doesn't use history

## DanaRv2, DanaRS

These pumps need a special care because AndoridAPS is using history from the pump but the records in pump don't have timezone stamp. 
That means if you simple change timezone in phone, records will be read with different timezone and will be doubled. 
To avoid this do the following steps on every timezone change:

* switch phone for manual time zone change before travel

When get out of plane:

* turn off pump
* change timezone on phone
* turn off phone, turn on pump
* clear history in pump
* change time in pump
* turn on phone
* let phone connect to the pump and fine-tune time

## Combo

## Insight

