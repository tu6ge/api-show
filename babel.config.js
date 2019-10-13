module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      },
      'element-ui'
    ],
    [
        "import", 
        {
            "libraryName": "view-design",
            "libraryDirectory": "src/components"
        },
        'view-design'
    ]
  ]
}
