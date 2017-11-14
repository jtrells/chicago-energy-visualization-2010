const mongoose = require('mongoose');

var CommunityArea = mongoose.model('community_areas_2', {
	"COMMUNITY_AREA_NAME": String,
	"TOTAL_KWH": Number,
	"TOTAL_THERMS": Number,
	"TOTAL_POPULATION": Number,
	"TOTAL_UNITS": Number,
	"COMMUNITY_AREA_NUMBER": Number,
	"KWH_JANUARY_2010": Number,
	"KWH_FEBRUARY_2010": Number,
	"KWH_MARCH_2010": Number,
	"KWH_APRIL_2010": Number,
	"KWH_MAY_2010": Number,
	"KWH_JUNE_2010": Number,
	"KWH_JULY_2010": Number,
	"KWH_AUGUST_2010": Number,
	"KWH_SEPTEMBER_2010": Number,
	"KWH_OCTOBER_2010": Number,
	"KWH_NOVEMBER_2010": Number,
	"KWH_DECEMBER_2010": Number,
	"THERM_JANUARY_2010": Number,
	"THERM_FEBRUARY_2010": Number,
	"THERM_MARCH_2010": Number,
	"THERM_APRIL_2010": Number,
	"THERM_MAY_2010": Number,
	"THERM_JUNE_2010": Number,
	"THERM_JULY_2010": Number,
	"THERM_AUGUST_2010": Number,
	"THERM_SEPTEMBER_2010": Number,
	"THERM_OCTOBER_2010": Number,
	"THERM_NOVEMBER_2010": Number,
	"THERM_DECEMBER_2010": Number,
	"KWH_TOTAL_SQFT": Number,
	"THERMS_TOTAL_SQFT": Number,
	"OCCUPIED_UNITS": Number
});

module.exports = {CommunityArea};