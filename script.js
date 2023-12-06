// toggle between tabs
function openTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Load the CSV file using a library like Papaparse
// You need to include Papaparse library in your HTML file

const csvData = `Id, Country,Year,Value
3,Austria,2013,56620.0
4,Austria,2014,56168.0
5,Austria,2015,56670.0
6,Austria,2016,57907.0
7,Austria,2017,64281.0
8,Austria,2018,71383.0
9,Austria,2019,71757.0
10,Austria,2020,68182.0
11,Austria,2021,70033.0
21,Canada,2010,247375.0
22,Canada,2011,254808.0
23,Canada,2012,258030.0
24,Canada,2013,263688.0
25,Canada,2014,267306.0
26,Canada,2015,270995.0
27,Canada,2016,320135.0
28,Canada,2017,319488.0
29,Canada,2018,320787.0
30,Canada,2019,321400.0
31,Canada,2021,314455.0
32,Canada,2022,314910.0
35,Czechia,2010,54859.0
36,Czechia,2015,62410.0
37,Czechia,2016,64217.0
38,Czechia,2017,65031.0
39,Czechia,2018,66692.0
40,Czechia,2019,67889.0
41,Czechia,2020,63912.0
42,Czechia,2021,67719.0
68,Finland,2010,58342.0
69,Finland,2011,60486.0
70,Finland,2012,60437.0
71,Finland,2013,61575.0
72,Finland,2014,63111.0
73,Finland,2015,64705.0
74,Finland,2016,66140.0
75,Finland,2017,65547.0
76,Finland,2018,65983.0
77,Finland,2019,65287.0
78,Finland,2020,67427.0
79,Finland,2021,63847.0
92,Germany,2010,753242.0
93,Germany,2011,759400.0
94,Germany,2012,774929.0
95,Germany,2013,787381.0
96,Germany,2014,799562.0
97,Germany,2015,807949.0
98,Germany,2016,826847.0
99,Germany,2017,833098.0
100,Germany,2018,834820.0
101,Germany,2019,913234.0
102,Germany,2020,898595.0
103,Germany,2021,897677.0
122,Hungary,2010,79053.0
123,Hungary,2011,79445.0
124,Hungary,2012,79416.0
125,Hungary,2013,79791.0
126,Hungary,2014,80243.0
127,Hungary,2015,80822.0
128,Hungary,2016,80166.0
129,Hungary,2017,80219.0
130,Hungary,2018,80211.0
131,Hungary,2019,80128.0
132,Hungary,2020,73045.0
133,Hungary,2021,76174.0
147,Ireland,2010,21048.0
148,Ireland,2011,20770.0
149,Ireland,2012,20038.0
150,Ireland,2013,21652.0
151,Ireland,2014,21825.0
152,Ireland,2015,22216.0
153,Ireland,2016,23086.0
154,Ireland,2017,23154.0
155,Ireland,2018,23529.0
156,Ireland,2019,23649.0
157,Ireland,2020,22831.0
158,Ireland,2021,22403.0
159,Italy,2010,330233.0
160,Italy,2011,340038.0
161,Italy,2012,350603.0
162,Italy,2013,371052.0
163,Italy,2014,378197.0
164,Italy,2015,385426.0
165,Italy,2016,379201.0
166,Italy,2017,396901.0
167,Italy,2018,443375.2
168,Italy,2019,451295.6
169,Italy,2020,421239.5
170,Italy,2021,423876.0
184,Japan,2010,851900.0
185,Japan,2011,854900.0
186,Japan,2012,872700.0
187,Japan,2013,894900.0
188,Japan,2014,908400.0
189,Japan,2015,919100.0
190,Japan,2016,931900.0
191,Japan,2017,939900.0
192,Japan,2018,946900.0
193,Japan,2019,957200.0
194,Japan,2020,965800.0
195,Japan,2021,970500.0
196,Japan,2022,970900.0
197,Korea,2010,115274.0
198,Korea,2011,131590.0
199,Korea,2012,145736.0
200,Korea,2013,155868.0
201,Korea,2014,163850.0
202,Korea,2015,175412.0
203,Korea,2016,184549.0
204,Korea,2017,196210.0
205,Korea,2018,209518.0
206,Korea,2019,218240.0
207,Korea,2020,221667.0
208,Korea,2021,230170.0
221,Luxembourg,2010,3881.0
222,Luxembourg,2011,3932.0
223,Luxembourg,2012,4149.0
224,Luxembourg,2013,4253.0
225,Luxembourg,2014,4388.0
226,Luxembourg,2015,4499.0
227,Luxembourg,2016,4561.0
228,Luxembourg,2017,4602.0
229,Luxembourg,2018,5277.0
230,Luxembourg,2019,5377.0
231,Luxembourg,2020,5227.0
232,Luxembourg,2021,5402.0
233,Luxembourg,2022,5246.0
251,Netherlands,2010,253945.0
252,Netherlands,2011,259470.0
253,Netherlands,2012,261835.0
254,Netherlands,2013,249188.0
255,Netherlands,2014,245636.0
256,Netherlands,2015,209605.0
257,Netherlands,2016,207660.0
258,Netherlands,2017,204120.0
259,Netherlands,2018,206175.0
260,Netherlands,2019,207800.0
261,Netherlands,2020,205120.0
273,New Zealand,2010,30479.7
274,New Zealand,2011,32044.5
275,New Zealand,2012,31539.4
276,New Zealand,2013,30903.9
277,New Zealand,2014,31533.4
278,New Zealand,2015,31953.5
279,New Zealand,2016,32702.8
280,New Zealand,2017,33026.5
281,New Zealand,2018,33229.6
282,New Zealand,2019,33624.6
283,New Zealand,2020,33760.0
295,Norway,2010,44399.0
296,Norway,2011,43406.0
297,Norway,2012,43919.0
298,Norway,2013,43048.0
299,Norway,2014,43073.0
300,Norway,2015,42850.0
301,Norway,2016,42644.0
302,Norway,2017,42092.0
303,Norway,2018,41290.0
304,Norway,2019,41889.0
305,Norway,2020,41071.0
306,Norway,2021,41188.0
307,Norway,2022,41187.0
321,Poland,2010,88353.0
322,Poland,2011,89730.0
323,Poland,2012,91511.0
324,Poland,2013,96262.0
325,Poland,2014,98222.0
326,Poland,2015,100061.0
327,Poland,2016,102721.0
328,Poland,2017,103427.0
329,Poland,2018,104121.0
330,Poland,2019,106008.0
331,Poland,2020,97694.0
332,Poland,2021,103631.0
333,Portugal,2010,20920.0
334,Portugal,2011,23810.0
335,Portugal,2012,22710.0
336,Portugal,2013,28721.0
337,Portugal,2014,31191.0
338,Portugal,2015,31307.0
339,Portugal,2016,32545.0
340,Portugal,2017,32895.0
341,Portugal,2018,33501.0
342,Portugal,2019,33206.0
343,Portugal,2020,29521.0
344,Portugal,2021,32133.0
345,Portugal,2022,33801.0
359,Slovak Republic,2010,33360.0
360,Slovak Republic,2011,33584.0
361,Slovak Republic,2012,34637.0
362,Slovak Republic,2013,36524.0
363,Slovak Republic,2014,38567.0
364,Slovak Republic,2015,41489.0
365,Slovak Republic,2016,45037.0
366,Slovak Republic,2017,45617.0
367,Slovak Republic,2018,41082.0
368,Slovak Republic,2019,41457.0
369,Slovak Republic,2020,39262.0
370,Slovak Republic,2021,39207.0
371,Slovak Republic,2022,39623.0
385,Spain,2010,148057.0
386,Spain,2011,168265.0
387,Spain,2012,172937.0
388,Spain,2013,186491.0
389,Spain,2014,187512.0
390,Spain,2015,205352.0
391,Spain,2016,208108.0
392,Spain,2017,223531.0
393,Spain,2018,240131.0
394,Spain,2019,251202.0
395,Spain,2020,227676.0
396,Spain,2021,244822.0
397,Spain,2022,259043.0
411,Sweden,2010,120009.0
412,Sweden,2011,119341.0
413,Sweden,2012,116485.0
414,Sweden,2013,119046.0
415,Sweden,2014,112404.0
416,Sweden,2015,113798.0
417,Sweden,2016,115763.0
418,Sweden,2017,114283.0
419,Sweden,2018,116501.0
420,Sweden,2019,116897.0
421,Sweden,2020,114174.0
422,Sweden,2021,113339.0
435,Switzerland,2010,85941.0
436,Switzerland,2011,87413.0
437,Switzerland,2012,88811.0
438,Switzerland,2013,89470.0
439,Switzerland,2014,90235.0
440,Switzerland,2015,90448.0
441,Switzerland,2016,91310.0
442,Switzerland,2017,91370.0
443,Switzerland,2018,91926.0
444,Switzerland,2019,92446.0
445,Switzerland,2020,87409.0
446,Switzerland,2021,89285.0
459,Türkiye,2011,32907.0
460,Türkiye,2012,36538.0
461,Türkiye,2013,36458.0
462,Türkiye,2014,37598.0
463,Türkiye,2015,40353.0
464,Türkiye,2016,43330.0
465,Türkiye,2017,46332.0
466,Türkiye,2018,50397.0
467,Türkiye,2019,54801.0
468,Türkiye,2020,54392.0
469,Türkiye,2021,58532.0
470,Türkiye,2022,62670.0
471,United States,2010,1396473.0
472,United States,2011,1389241.0
473,United States,2012,1383488.0
474,United States,2013,1371926.0
475,United States,2014,1369700.0
476,United States,2016,1400810.0
477,United States,2020,1132988.0
483,Estonia,2010,7963.0
484,Estonia,2011,8232.0
485,Estonia,2012,8621.0
486,Estonia,2013,12777.0
487,Estonia,2014,13750.0
488,Estonia,2015,13742.0
489,Estonia,2016,14114.0
490,Estonia,2017,14315.0
491,Estonia,2018,14581.0
492,Estonia,2019,15036.0
493,Estonia,2020,14654.0
494,Estonia,2021,15308.0
507,Israel,2010,18642.0
508,Israel,2011,18998.0
509,Israel,2012,19397.0
510,Israel,2013,19658.0
511,Israel,2014,19550.0
512,Israel,2015,19302.0
513,Israel,2016,18798.0
514,Israel,2017,18225.0
515,Israel,2018,18215.0
516,Israel,2019,18272.0
517,Israel,2020,16834.0
518,Israel,2021,17550.0
532,Slovenia,2011,21093.0
533,Slovenia,2012,20974.0
534,Slovenia,2013,21902.0
535,Slovenia,2014,22173.0
536,Slovenia,2015,22415.0
537,Slovenia,2016,22752.0
538,Slovenia,2017,22904.0
539,Slovenia,2018,23165.0
540,Slovenia,2019,23227.0
541,Slovenia,2020,20520.0
7665,Latvia,2011,5847.0
7666,Latvia,2012,5820.0
7667,Latvia,2013,5604.0
7668,Latvia,2014,5425.0
7669,Latvia,2015,5353.0
7670,Latvia,2016,5229.0
7671,Latvia,2017,5181.0
7672,Latvia,2018,5039.0
7673,Latvia,2019,4853.0
7674,Latvia,2020,4523.0
7675,Latvia,2021,4556.0
8094,Lithuania,2010,62690.0
8095,Lithuania,2011,60462.0
8096,Lithuania,2012,72090.0
8097,Lithuania,2013,78120.0
8098,Lithuania,2014,84006.0
8099,Lithuania,2015,88350.0
8100,Lithuania,2016,90217.0
8101,Lithuania,2017,91537.0
8102,Lithuania,2018,93145.0
8103,Lithuania,2019,111516.0
8104,Lithuania,2020,92786.0
8105,Lithuania,2021,96715.0`;

// Parse the CSV data
const parsedData = Papa.parse(csvData, { header: true });

// Get unique countries from the dataset
const countries = [...new Set(parsedData.data.map(row => row.Country))];

// Populate the dropdowns with country options
const country1Dropdown = document.getElementById("country1");
const country2Dropdown = document.getElementById("country2");

countries.forEach(country => {
  const option1 = document.createElement("option");
  option1.value = country;
  option1.text = country;
  country1Dropdown.add(option1);

  const option2 = document.createElement("option");
  option2.value = country;
  option2.text = country;
  country2Dropdown.add(option2);
});

// Initial countries to compare
let selectedCountry1 = countries[0];
let selectedCountry2 = countries[1];

// Set up event listeners for dropdown changes
country1Dropdown.addEventListener("change", function (event) {
  selectedCountry1 = event.target.value;
  updateChart();
});

country2Dropdown.addEventListener("change", function (event) {
  selectedCountry2 = event.target.value;
  updateChart();
});

// Create a line chart
const ctx = document.getElementById("lineChart").getContext("2d");

// Define initial data (empty arrays)
const initialData = {
  labels: [],
  datasets: []
};

const lineChart = new Chart(ctx, {
  type: 'line',
  data: initialData,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: '# of LTC Recipients'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Long-Term Care Recipients Comparison'
      }
    }
  }
});

// Function to update the line chart based on selected countries
function updateChart() {
  // ... (your existing updateChart function, excluding the chart initialization)

  // Update chart data
  lineChart.data.labels = years1; // Assuming years1 and years2 are the same for both countries
  lineChart.data.datasets = [
    {
      label: selectedCountry1,
      data: values1,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: false,
    },
    {
      label: selectedCountry2,
      data: values2,
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: false,
    },
  ];

  // Update the chart
  lineChart.update();
}

// Initial chart rendering
updateChart();