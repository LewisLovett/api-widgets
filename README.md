# API Widgets

This project contains various react components that recive infomation from API's and renders that data on screen.

## Weather forecast widget
This widget requests the location of the user and using that infomation makes an api call for the weather forecast for the local area. The widget displays the current weather, the weather for the rest of the day and for the next two days. The widget is capable of rendering the forecast for additional days but the free version of the api only responds with the fore cast for today, tomorrow and the day after.

## What3Words map widget
This widget involves the what3words map. The company what3words have divided the map of whole world into 3x3 meter squares. Each of these squares has a unique three word sequence such as 'crop.glue.region'. Using this map it can be incredibly easy to find a specific location.
My widget requests the user's location and using this data makes an api request to the what3words api to get the three word of the user's current location. Then an api request is made to Google maps to render a what3words map that shows the user's current location.


## Words of the day widget
This widget makes an api call for a word of the day api and returns and displays the word of the day from three sources.