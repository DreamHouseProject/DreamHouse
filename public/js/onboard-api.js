// onboard api key is: d9be0a346a7cf080f0ed014a6b61a9de
var postalCode = $("#pac-input").val();
console.log(postalCode);

//  Onboard api Community Data
var queryURL1 = "https://search.onboard-apis.com/communityapi/v2.0.0/Area/Full/?AreaId=ZI" + postalCode

$.ajax({
      url: queryURL1,
      method: "GET",
      dataType: "json",
      data: {query: search},
      headers: { 
      	"apikey": "d9be0a346a7cf080f0ed014a6b61a9de",
      	"accept": "application/json" 
      }
    }).done(function(response) {
  	
  	var communityData = response.response.result.package.item[0]
    console.log("Community Data by Zip Code")
    console.log("*********************************************************")
    // Colleges
  	console.log("Four Year College: " + communityData.fouryr)
  	console.log("Junior College: " + communityData.jc)

  	// Airport
  	console.log("Airport: " + communityData.airport)

  	// Weather
  	// min temp in January
  	console.log("Min temp in January: " + communityData.tmpminjan)
  	// average temp in January
  	console.log("Average temp in January: " + communityData.tmpavejan)
  	// Mix temp in January
  	console.log("Max temp in January: " + communityData.tmpmaxjan)
  	// min temp in July
  	console.log("Min temp in July: " + communityData.tmpminjul)
  	// average temp in July
  	console.log("Average temp in July: " + communityData.tmpavejul)
  	// Max temp in July
  	console.log("Max temp in July: " + communityData.tmpmaxjul)
  	// anual persipitaion in inches (snow and rain)
  	console.log("Anual persipitaion in inches (snow and rain): " + communityData.precipann)
  	// serious weather risks (100 is national average)
  	console.log("Serious weather risks score (100 is national average): " + communityData.rskcyrisk)


  	// Crime Score
  	// total crime risk (100 is national average)
  	console.log("Total crime risk score (100 is national average): " + communityData.crmcytotc)

  	// population
    console.log("Population: " + communityData.popcy)
    console.log("*********************************************************")

  })


   
// var queryURL2 = "https://api.greatschools.org/schools/nearby?key=6e010c5687631eeb16169e625fbf9915&state=CA&zip=" + postalCode + "&limit=2"
// Greatschools api ajax GET. I'm getting an error message saying "Failed to load file:///school: Cross origin requests are only supported protocal schemes: http, data, chrome, chrome extentions, https"
$.ajax({
      url: '/school',
      method: "GET",
      dataType: "json"
  
    }).done(function(response) {
    console.log(response)
 })

// Longitude and Latitude of 100 Properties in the postal code that is being searched. Some are on and off the market. Some are Rentals. This will ba a great resource to see what other properties values are in the surrounding areas of the search. Still need to find an api for active listings.

var queryURL3 = "https://search.onboard-apis.com/propertyapi/v1.0.0/avm/snapshot?postalcode=" + postalCode + "&propertyType=sfr&pageSize=100"

$.ajax({
      url: queryURL3,
      method: "GET",
      dataType: "json",
      headers: { 
      	"apikey": "d9be0a346a7cf080f0ed014a6b61a9de" 
      }
    }).done(function(response) {
    console.log(response)
    

    //zillow code goes here
    
    var lat1 = response.property[0].location.latitude
    var lon1 = response.property[0].location.longitude
    var lat2 = response.property[1].location.latitude
    var lon2 = response.property[1].location.longitude
    var lat3 = response.property[2].location.latitude
    var lon3 = response.property[2].location.longitude
    var lat4 = response.property[3].location.latitude
    var lon4 = response.property[3].location.longitude
    var lat5 = response.property[4].location.latitude
    var lon5 = response.property[4].location.longitude
    var lat6 = response.property[5].location.latitude
    var lon6 = response.property[5].location.longitude
    var lat7 = response.property[6].location.latitude
    var lon7 = response.property[6].location.longitude
    var lat8 = response.property[7].location.latitude
    var lon8 = response.property[7].location.longitude
    var lat9 = response.property[8].location.latitude
    var lon9 = response.property[8].location.longitude
    var lat10 = response.property[9].location.latitude
    var lon10 = response.property[9].location.longitude
    var lat11 = response.property[10].location.latitude
    var lon11 = response.property[10].location.longitude
    var lat12 = response.property[11].location.latitude
    var lon12 = response.property[11].location.longitude
    var lat13 = response.property[12].location.latitude
    var lon13 = response.property[12].location.longitude
    var lat14 = response.property[13].location.latitude
    var lon14 = response.property[13].location.longitude
    var lat15 = response.property[14].location.latitude
    var lon15 = response.property[14].location.longitude
    var lat16 = response.property[15].location.latitude
    var lon16 = response.property[15].location.longitude
    var lat17 = response.property[16].location.latitude
    var lon17 = response.property[16].location.longitude
    var lat18 = response.property[17].location.latitude
    var lon18 = response.property[17].location.longitude
    var lat19 = response.property[18].location.latitude
    var lon19 = response.property[18].location.longitude
    var lat20 = response.property[19].location.latitude
    var lon20 = response.property[19].location.longitude
    var lat21 = response.property[20].location.latitude
    var lon21 = response.property[20].location.longitude
    var lat22 = response.property[21].location.latitude
    var lon22 = response.property[21].location.longitude
    var lat23 = response.property[22].location.latitude
    var lon23 = response.property[22].location.longitude
    var lat24 = response.property[23].location.latitude
    var lon24 = response.property[23].location.longitude
    var lat25 = response.property[24].location.latitude
    var lon25 = response.property[24].location.longitude
    var lat26 = response.property[25].location.latitude
    var lon26 = response.property[25].location.longitude
    var lat27 = response.property[26].location.latitude
    var lon27 = response.property[26].location.longitude
    var lat28 = response.property[27].location.latitude
    var lon28 = response.property[27].location.longitude
    var lat29 = response.property[28].location.latitude
    var lon29 = response.property[28].location.longitude
    var lat30 = response.property[29].location.latitude
    var lon30 = response.property[29].location.longitude
    var lat31 = response.property[30].location.latitude
    var lon31 = response.property[30].location.longitude
    var lat32 = response.property[31].location.latitude
    var lon32 = response.property[31].location.longitude
    var lat33 = response.property[32].location.latitude
    var lon33 = response.property[32].location.longitude
    var lat34 = response.property[33].location.latitude
    var lon34 = response.property[33].location.longitude
    var lat35 = response.property[34].location.latitude
    var lon35 = response.property[34].location.longitude
    var lat36 = response.property[35].location.latitude
    var lon36 = response.property[35].location.longitude
    var lat37 = response.property[36].location.latitude
    var lon37 = response.property[36].location.longitude
    var lat38 = response.property[37].location.latitude
    var lon38 = response.property[37].location.longitude
    var lat39 = response.property[38].location.latitude
    var lon39 = response.property[38].location.longitude
    var lat40 = response.property[39].location.latitude
    var lon40 = response.property[39].location.longitude
    var lat41 = response.property[40].location.latitude
    var lon41 = response.property[40].location.longitude
    var lat42 = response.property[41].location.latitude
    var lon42 = response.property[41].location.longitude
    var lat43 = response.property[42].location.latitude
    var lon43 = response.property[42].location.longitude
    var lat44 = response.property[43].location.latitude
    var lon44 = response.property[43].location.longitude
    var lat45 = response.property[44].location.latitude
    var lon45 = response.property[44].location.longitude
    var lat46 = response.property[45].location.latitude
    var lon46 = response.property[45].location.longitude
    var lat47 = response.property[46].location.latitude
    var lon47 = response.property[46].location.longitude
    var lat48 = response.property[47].location.latitude
    var lon48 = response.property[47].location.longitude
    var lat49 = response.property[48].location.latitude
    var lon49 = response.property[48].location.longitude
    var lat50 = response.property[49].location.latitude
    var lon50 = response.property[49].location.longitude
    var lat51 = response.property[50].location.latitude
    var lon51 = response.property[50].location.longitude
    var lat52 = response.property[51].location.latitude
    var lon52 = response.property[51].location.longitude
    var lat53 = response.property[52].location.latitude
    var lon53 = response.property[52].location.longitude
    var lat54 = response.property[53].location.latitude
    var lon54 = response.property[53].location.longitude
    var lat55 = response.property[54].location.latitude
    var lon55 = response.property[54].location.longitude
    var lat56 = response.property[55].location.latitude
    var lon56 = response.property[55].location.longitude
    var lat57 = response.property[56].location.latitude
    var lon57 = response.property[56].location.longitude
    var lat58 = response.property[57].location.latitude
    var lon58 = response.property[57].location.longitude
    var lat59 = response.property[58].location.latitude
    var lon59 = response.property[58].location.longitude
    var lat60 = response.property[59].location.latitude
    var lon60 = response.property[59].location.longitude
    var lat61 = response.property[60].location.latitude
    var lon61 = response.property[60].location.longitude
    var lat62 = response.property[61].location.latitude
    var lon62 = response.property[61].location.longitude
    var lat63 = response.property[62].location.latitude
    var lon63 = response.property[62].location.longitude
    var lat64 = response.property[63].location.latitude
    var lon64 = response.property[63].location.longitude
    var lat65 = response.property[64].location.latitude
    var lon65 = response.property[64].location.longitude
    var lat66 = response.property[65].location.latitude
    var lon66 = response.property[65].location.longitude
    var lat67 = response.property[66].location.latitude
    var lon67 = response.property[66].location.longitude
    var lat68 = response.property[67].location.latitude
    var lon68 = response.property[67].location.longitude
    var lat69 = response.property[68].location.latitude
    var lon69 = response.property[68].location.longitude
    var lat70 = response.property[69].location.latitude
    var lon70 = response.property[69].location.longitude
    var lat71 = response.property[70].location.latitude
    var lon71 = response.property[70].location.longitude
    var lat72 = response.property[71].location.latitude
    var lon72 = response.property[71].location.longitude
    var lat73 = response.property[72].location.latitude
    var lon73 = response.property[72].location.longitude
    var lat74 = response.property[73].location.latitude
    var lon74 = response.property[73].location.longitude
    var lat75 = response.property[74].location.latitude
    var lon75 = response.property[74].location.longitude
    var lat76 = response.property[75].location.latitude
    var lon76 = response.property[75].location.longitude
    var lat77 = response.property[76].location.latitude
    var lon77 = response.property[76].location.longitude
    var lat78 = response.property[77].location.latitude
    var lon78 = response.property[77].location.longitude
    var lat79 = response.property[78].location.latitude
    var lon79 = response.property[78].location.longitude
    var lat80 = response.property[79].location.latitude
    var lon80 = response.property[79].location.longitude
    var lat81 = response.property[80].location.latitude
    var lon81 = response.property[80].location.longitude
    var lat82 = response.property[81].location.latitude
    var lon82 = response.property[81].location.longitude
    var lat83 = response.property[82].location.latitude
    var lon83 = response.property[82].location.longitude
    var lat84 = response.property[83].location.latitude
    var lon84 = response.property[83].location.longitude
    var lat85 = response.property[84].location.latitude
    var lon85 = response.property[84].location.longitude
    var lat86 = response.property[85].location.latitude
    var lon86 = response.property[85].location.longitude
    var lat87 = response.property[86].location.latitude
    var lon87 = response.property[86].location.longitude
    var lat88 = response.property[87].location.latitude
    var lon88 = response.property[87].location.longitude
    var lat89 = response.property[88].location.latitude
    var lon89 = response.property[88].location.longitude
    var lat90 = response.property[89].location.latitude
    var lon90 = response.property[89].location.longitude
    var lat91 = response.property[90].location.latitude
    var lon91 = response.property[90].location.longitude
    var lat92 = response.property[91].location.latitude
    var lon92 = response.property[91].location.longitude
    var lat93 = response.property[92].location.latitude
    var lon93 = response.property[92].location.longitude
    var lat94 = response.property[93].location.latitude
    var lon94 = response.property[93].location.longitude
    var lat95 = response.property[94].location.latitude
    var lon95 = response.property[94].location.longitude
    var lat96 = response.property[95].location.latitude
    var lon96 = response.property[95].location.longitude
    var lat97 = response.property[96].location.latitude
    var lon97 = response.property[96].location.longitude
    var lat98 = response.property[97].location.latitude
    var lon98 = response.property[97].location.longitude
    var lat99 = response.property[98].location.latitude
    var lon99 = response.property[98].location.longitude
    var lat100 = response.property[99].location.latitude
    var lon100 = response.property[99].location.longitude


    var propLocations = [
    prop1 = {
    	latitude: lat1, 
    	longitude: lon1
    },
    prop2 = {
    	latitude: lat2, 
    	longitude: lon2
    },
    prop3 = {
    	latitude: lat3, 
    	longitude: lon3
    },
    prop4 = {
    	latitude: lat4, 
    	longitude: lon4
    },
    prop5 = {
    	latitude: lat5, 
    	longitude: lon5
    },
    prop6 = {
    	latitude: lat6, 
    	longitude: lon6
    },
    prop7 = {
    	latitude: lat7, 
    	longitude: lon7
    },
    prop8 = {
    	latitude: lat8, 
    	longitude: lon8
    },
    prop9 = {
    	latitude: lat9, 
    	longitude: lon9
    },
    prop10 = {
    	latitude: lat10, 
    	longitude: lon10
    },
    prop11 = {
    	latitude: lat11, 
    	longitude: lon11
    },
    prop12 = {
    	latitude: lat12, 
    	longitude: lon12
    },
    prop13 = {
    	latitude: lat13, 
    	longitude: lon13
    },
    prop14 = {
    	latitude: lat14, 
    	longitude: lon14
    },
    prop15 = {
    	latitude: lat15, 
    	longitude: lon15
    },
    prop16 = {
    	latitude: lat16, 
    	longitude: lon16
    },
    prop17 = {
    	latitude: lat17, 
    	longitude: lon17
    },
    prop18 = {
    	latitude: lat18, 
    	longitude: lon18
    },
    prop19 = {
    	latitude: lat19, 
    	longitude: lon19
    },
    prop20 = {
    	latitude: lat20, 
    	longitude: lon20
    },
    prop21 = {
    	latitude: lat21, 
    	longitude: lon21
    },
    prop22 = {
    	latitude: lat22, 
    	longitude: lon22
    },
    prop23 = {
    	latitude: lat23, 
    	longitude: lon23
    },
    prop24 = {
    	latitude: lat24, 
    	longitude: lon24
    },
    prop25 = {
    	latitude: lat25, 
    	longitude: lon25
    },
    prop26 = {
    	latitude: lat26, 
    	longitude: lon26
    },
    prop27 = {
    	latitude: lat27, 
    	longitude: lon27
    },
    prop28 = {
    	latitude: lat28, 
    	longitude: lon28
    },
    prop29 = {
    	latitude: lat29, 
    	longitude: lon29
    },
    prop30 = {
    	latitude: lat30, 
    	longitude: lon30
    },
    prop31 = {
    	latitude: lat31, 
    	longitude: lon31
    },
    prop32 = {
    	latitude: lat32, 
    	longitude: lon32
    },
    prop33 = {
    	latitude: lat33, 
    	longitude: lon33
    },
    prop34 = {
    	latitude: lat34, 
    	longitude: lon34
    },
    prop35 = {
    	latitude: lat35, 
    	longitude: lon35
    },
    prop36 = {
    	latitude: lat36, 
    	longitude: lon36
    },
    prop37 = {
    	latitude: lat37, 
    	longitude: lon37
    },
    prop38 = {
    	latitude: lat38, 
    	longitude: lon38
    },
    prop39 = {
    	latitude: lat39, 
    	longitude: lon39
    },
    prop40 = {
    	latitude: lat40, 
    	longitude: lon40
    },
    prop41 = {
    	latitude: lat41, 
    	longitude: lon41
    },
    prop42 = {
    	latitude: lat42, 
    	longitude: lon42
    },
    prop43 = {
    	latitude: lat43, 
    	longitude: lon43
    },
    prop44 = {
    	latitude: lat44, 
    	longitude: lon44
    },
    prop45 = {
    	latitude: lat45, 
    	longitude: lon45
    },
    prop46 = {
    	latitude: lat46, 
    	longitude: lon46
    },
    prop47 = {
    	latitude: lat47, 
    	longitude: lon47
    },
    prop48 = {
    	latitude: lat48, 
    	longitude: lon48
    },
    prop49 = {
    	latitude: lat49, 
    	longitude: lon49
    },
    prop50 = {
    	latitude: lat50, 
    	longitude: lon50
    },
    prop51 = {
    	latitude: lat51, 
    	longitude: lon51
    },
    prop52 = {
    	latitude: lat52, 
    	longitude: lon52
    },
    prop53 = {
    	latitude: lat53, 
    	longitude: lon53
    },
    prop54 = {
    	latitude: lat54, 
    	longitude: lon54
    },
    prop55 = {
    	latitude: lat55, 
    	longitude: lon55
    },
    prop56 = {
    	latitude: lat56, 
    	longitude: lon56
    },
    prop57 = {
    	latitude: lat57, 
    	longitude: lon57
    },
    prop58 = {
    	latitude: lat58, 
    	longitude: lon58
    },
    prop59 = {
    	latitude: lat59, 
    	longitude: lon59
    },
    prop60 = {
    	latitude: lat60, 
    	longitude: lon60
    },
    prop61 = {
    	latitude: lat61, 
    	longitude: lon1
    },
    prop62 = {
    	latitude: lat62, 
    	longitude: lon62
    },
    prop63 = {
    	latitude: lat63, 
    	longitude: lon63
    },
    prop64 = {
    	latitude: lat64, 
    	longitude: lon64
    },
    prop65 = {
    	latitude: lat65, 
    	longitude: lon65
    },
    prop66 = {
    	latitude: lat66, 
    	longitude: lon66
    },
    prop67 = {
    	latitude: lat67, 
    	longitude: lon67
    },
    prop68 = {
    	latitude: lat68, 
    	longitude: lon68
    },
    prop69 = {
    	latitude: lat69, 
    	longitude: lon69
    },
    prop70 = {
    	latitude: lat70, 
    	longitude: lon70
    },
    prop71 = {
    	latitude: lat71, 
    	longitude: lon71
    },
    prop72 = {
    	latitude: lat72, 
    	longitude: lon72
    },
    prop73 = {
    	latitude: lat73, 
    	longitude: lon73
    },
    prop74 = {
    	latitude: lat74, 
    	longitude: lon74
    },
    prop75 = {
    	latitude: lat75, 
    	longitude: lon75
    },
    prop76 = {
    	latitude: lat76, 
    	longitude: lon76
    },
    prop77 = {
    	latitude: lat77, 
    	longitude: lon77
    },
    prop78 = {
    	latitude: lat78, 
    	longitude: lon78
    },
    prop79 = {
    	latitude: lat79, 
    	longitude: lon79
    },
    prop80 = {
    	latitude: lat80, 
    	longitude: lon80
    },
    prop81 = {
    	latitude: lat81, 
    	longitude: lon81
    },
    prop82 = {
    	latitude: lat82, 
    	longitude: lon82
    },
    prop83 = {
    	latitude: lat83, 
    	longitude: lon83
    },
    prop84 = {
    	latitude: lat84, 
    	longitude: lon84
    },
    prop85 = {
    	latitude: lat85, 
    	longitude: lon85
    },
    prop86 = {
    	latitude: lat86, 
    	longitude: lon86
    },
    prop87 = {
    	latitude: lat87, 
    	longitude: lon87
    },
    prop88 = {
    	latitude: lat88, 
    	longitude: lon88
    },
    prop89 = {
    	latitude: lat89, 
    	longitude: lon89
    },
    prop90 = {
    	latitude: lat90, 
    	longitude: lon90
    },
    prop91 = {
    	latitude: lat91, 
    	longitude: lon91
    },
    prop92 = {
    	latitude: lat92, 
    	longitude: lon92
    },
    prop93 = {
    	latitude: lat93, 
    	longitude: lon93
    },
    prop94 = {
    	latitude: lat94, 
    	longitude: lon94
    },
    prop95 = {
    	latitude: lat95, 
    	longitude: lon95
    },
    prop96 = {
    	latitude: lat96, 
    	longitude: lon96
    },
    prop97 = {
    	latitude: lat97, 
    	longitude: lon97
    },
    prop98 = {
    	latitude: lat98, 
    	longitude: lon98
    },
    prop99 = {
    	latitude: lat99, 
    	longitude: lon99
    },
    prop100 = {
    	latitude: lat100, 
    	longitude: lon100
    }]
    
    console.log("100 Single Family Home Listings (Latitude and Longitude): ")
    console.log(propLocations)
})
