import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script'

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html>
          <Head>
              <meta name="wpk-bid" content="dta_1_2386903611" />
              <script>
                  {` var isDingtalk = navigator && /DingTalk/.test(navigator.userAgent);
                  var isProductEnv = window &&window.location &&window.location.host
                  && window.location.host.indexOf('//127.0.0.1')===-1
                  && window.location.host.indexOf('//localhost')===-1
                  && window.location.host.indexOf('//192.168.')===-1
                  // 如果有其它测试域名，请一起排掉，减少测试环境对生产环境监控的干扰
                  if (isProductEnv) {    !(function(c,i,e,b){var h=i.createElement("script");
                  var f=i.getElementsByTagName("script")[0];
                  h.type="text/javascript";
                  h.crossorigin=true;
                  h.onload=function(){c[b]||(c[b]=new c.wpkReporter({bid:"dta_1_2386903611"}));
                      c[b].installAll()};
                  f.parentNode.insertBefore(h,f);
                  h.src=e})(window,document,"https://g.alicdn.com/woodpeckerx/jssdk??wpkReporter.js","__wpk");
              }`}
              </script>
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
