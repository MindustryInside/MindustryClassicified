/*
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
*/

(() => {

Log.info("[accent]Mindustry Classicified [white]init...");

Log.info("[accent]Mindustry Classicified [white]init: game colors overriding...");
require("Pal");

//Log.info("[accent]Mindustry Classicified [white]init: shadows overriding...");
// TODO: custom shaders

//Log.info("[accent]Mindustry Classicified [white]init: shield shader overriding...");
// TODO: custom shaders

//Log.info("[accent]Mindustry Classicified [white]init: fluid shaders overriding...");
// TODO: custom shaders

Events.on(EventType.ClientLoadEvent, cons(() => {
	Log.info("[accent]Mindustry Classicified [white]initialised");
}));

})();
