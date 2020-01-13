window.BTBLang = new globalThis['blacktoolbox-prototype-languages'].default;

const config = [
  { index: 'en_US', label: 'English', dictionary: loadLanguage('en_US') },
  { index: 'zh_TW', label: '繁體中文', dictionary: loadLanguage('zh_TW') },
];

function loadLanguage(currentlang) {
  let obj = new XMLHttpRequest();
  obj.overrideMimeType('application/json');
  obj.open('GET', location.origin + location.pathname +'/languages/'+ currentlang +'.json', true);
  obj.onreadystatechange = function () {
    if ((4 == obj.readyState)
        && ('200' == obj.status)
    )
    {
      return obj.responseText;
    }
  };
  obj.send();
}

globalThis['blacktoolbox-prototype-languages'].initializer(config);

console.log(BTBLang)

function test() {
  console.log('123')
}

console.log(BTBLang.translate('test'))