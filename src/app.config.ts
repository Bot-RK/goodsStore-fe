export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/test/index',
    'pages/thingList/index',
    'pages/backStage/index',
    'pages/announce/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "subpackages":[
    {
      "root": 'pages/apply',
      "pages":[
        'index',
        'third',
        'four',
        'last',
        'multiple',
      ]
    },
    {
      "root":'pages/record',
      "pages":[
        'index',
        'detail',
      ]
    },
    {
      "root":'pages/statistics',
      "pages":[
        'index',
        'record',
      ]
    },
    {
      "root": 'pages/addPeople',
      "pages":[
        'index',
        'addNumber',
        'addDp',
      ]
    },
    {
      "root": 'pages/manager',
      "pages":[
        'index',
        'first', 
        'second',
        'third',
      ]
    }
  ]
  
})
