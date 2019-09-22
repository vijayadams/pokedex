
require('./common/constants.js')

module.exports = {
  src_folders: ['specs'],
  output_folder: 'reports',
  custom_commands_path: ['custom/commands'],
  custom_assertions_path: ['custom/assertions'],
  page_objects_path: ['page-objects'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: "./screenshots",
        on_error: false,
        on_failure: true
      },
      selenium_port: 4444,
      selenium_host: 'localhost',
      end_session_on_fail: true,
      skip_testcases_on_fail: false,
      silent: true,
      globals: {
        devServerURL: 'https://www.pokemon.com/us/pokedex/',

      }
    },
    "use_css" : false,
    "use_xpath" : true,
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions : {
          args : ["user-data-dir=chromeProfile"]
          

        }
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
