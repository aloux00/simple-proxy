'use strict';

const path = require('path');

let config = {
  host: '127.0.0.1',
  domain: 'example.com',
  http: {
    port: 80,
  },
  https: {
    enable: true,
    port: 443,
    cert: `-----BEGIN CERTIFICATE-----
MIIGqDCCBZCgAwIBAgIQRVrwa08OFPN3FpWRrTr6VTANBgkqhkiG9w0BAQsFADBP
MQswCQYDVQQGEwJDTjEaMBgGA1UEChMRV29TaWduIENBIExpbWl0ZWQxJDAiBgNV
BAMMG0NBIOayg+mAmuWFjei0uVNTTOivgeS5piBHMjAeFw0xNjA5MTgwNDUwNTJa
Fw0xOTA5MTgwNDUwNTJaMCgxCzAJBgNVBAYTAkNOMRkwFwYDVQQDDBBleGFtcGxl
LnFpb3VzLmNuMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA14Z6zE0k
3QyDF8wTnKR4U86/KFJ1qF7bKlngVhz5ZUtGJyS3qAECoCKGjRfb77paDhwS9p33
6OHWxVbJP8we4qb9LKFP1tZTnTwI1mEKnrfz/sZxMyJoDcPU8ORYmX+htRmUkNqU
SfGwpORPgjJ16vxZ6ZkESsu1p5xpLfxSiv0xkWmYtuyHRguigtN/KgGUO0pP2lNG
DXEFSlxZQ3FalvDBBZMR5WbwCCEm0YGYj6vwtyHSGw/xSbU8S4/ZxDh/VD7dJicZ
mwQprgCiwYfPggtn+nE8Dqwzx6HLee7LgE6GYtPPpkIZMKNfnKVZLcUhAkHbKTyU
DnM3nAs7YK78XwIDAQABo4IDpTCCA6EwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQW
MBQGCCsGAQUFBwMCBggrBgEFBQcDATAJBgNVHRMEAjAAMB0GA1UdDgQWBBTCqXOs
r7/fjigGozDTQKEY2HWs1jAfBgNVHSMEGDAWgBQw2nSG8yiQVp7XMTHCvVnNkxI5
HTB/BggrBgEFBQcBAQRzMHEwNQYIKwYBBQUHMAGGKWh0dHA6Ly9vY3NwMi53b3Np
Z24uY24vY2EyZzIvc2VydmVyMS9mcmVlMDgGCCsGAQUFBzAChixodHRwOi8vYWlh
Mi53b3NpZ24uY24vY2EyZzIuc2VydmVyMS5mcmVlLmNlcjA+BgNVHR8ENzA1MDOg
MaAvhi1odHRwOi8vY3JsczIud29zaWduLmNuL2NhMmcyLXNlcnZlcjEtZnJlZS5j
cmwwGwYDVR0RBBQwEoIQZXhhbXBsZS5xaW91cy5jbjBPBgNVHSAESDBGMAgGBmeB
DAECATA6BgsrBgEEAYKbUQEBAjArMCkGCCsGAQUFBwIBFh1odHRwOi8vd3d3Lndv
c2lnbi5jb20vcG9saWN5LzCCAfQGCisGAQQB1nkCBAIEggHkBIIB4AHeAHYA3esd
K3oNT6Ygi4GtgWhwfi6OnQHVXIiNPRHEzbbsvswAAAFXO9CwwQAABAMARzBFAiA4
Yh1wTLoxFYkajkrGpbNPcuIfIdAJQVsu3wL6113BGAIhANioweq5BXT8gNwvwnzc
P+7D2DL5Hh9aFrQD1PKi/uqSAHYA7ku9t3XOYLrhQmkfq+GeZqMPfl+wctiDAMR7
iXqo/csAAAFXO9C3LAAABAMARzBFAiAQ4Ns/WKdvDkX54i9iX7yP0HTFzFM3y1t/
gjMcaL9jFQIhAKyOcWn5wCaENJ8lTlWtQzmV8aDON6bLspgiFnu0AW+lAHUApLkJ
kLQYWBSHuxOizGdwCjw1mAT5G9+443fNDsgN3BAAAAFXO9CzogAABAMARjBEAiAG
ojrbWqpW9BTss/CTjicUnb/hhKkhMANeo3vXwsis8AIgLjggLe7ZO3+4Pktic3Hu
8Uv/c4yNcYjM8QTEa6Yb6LQAdQBo9pj4H2SCvjqM7rkoHUz8cVFdZ5PURNEKZ6y7
T0/7xAAAAVc70LVKAAAEAwBGMEQCIFIxA/fT4BWO4UGz2QGytGIuuAuGCmsI4QPW
6Zq/i4n+AiAD8nglwQdMG/OSCNp+qjB6gUwFHbUP5zHYKiHEEghSFzANBgkqhkiG
9w0BAQsFAAOCAQEAjKmtwdgBD/ETyyehkDbF2OL9B7lRebsMW63S/9btj7XSwm5G
6XkUkC6hhV/vZ/DqTFUcj1lU7QAx36xBeNPBqSKO2VumIn4LXKYYth5UVPegqHwV
ZK4wqUWYOMreH9QqeiaK+evwpHexVk5T1eZC201KoR8ycvb3rPAzrgZKBpcB4Lh+
g5ZKdjWiwZS7M+pKD/HAzdeF1ih0zRSBXYOziUI8BhucBUC4PjFzmyZZn5k3OOKb
k3hSE6MJxupiOAVssQV4jpDv/SE+SYOltzsRy9HeirnvHZ6+UtVmtj5wOty23Gms
Apx2uATCj7rKSVz70RhtJBmgOtiM4raN1aEYVQ==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIFlDCCA3ygAwIBAgIQAViMOjUHs/iXIxx2t++F3TANBgkqhkiG9w0BAQsFADBG
MQswCQYDVQQGEwJDTjEaMBgGA1UEChMRV29TaWduIENBIExpbWl0ZWQxGzAZBgNV
BAMMEkNBIOayg+mAmuagueivgeS5pjAeFw0xNDExMDgwMDU4NThaFw0yOTExMDgw
MDU4NThaME8xCzAJBgNVBAYTAkNOMRowGAYDVQQKExFXb1NpZ24gQ0EgTGltaXRl
ZDEkMCIGA1UEAwwbQ0Eg5rKD6YCa5YWN6LS5U1NM6K+B5LmmIEcyMIIBIjANBgkq
hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0JMBh1z5ihKZLtSptut+daPq6CIovna/
2uswQNsecCE4v+pEZ5djMblHQwzu1ciAav06jGTK7c6lRB4Sbb82hoXUUnZ5jBao
RDNPM3NagriXz06P3Mm2FJXtzWKT73Nw4gu+TnbdtLildjf7EOCpZFUC76e8svcO
tfJpRR0dDSui5xNH7E1zEnJBCL3hvyVnhWu6KWfKyiAHL25IEK1bEQmHAZCePcJp
eiSDPE9URMF8iiurgXivk2Hi9NKKHOByKr0AlNUxWM0qjTv5FivrmrqvFnF5+oPV
cZUWyDbEocauums8RjgYaqaD2qv7mCU3uaOzCWIijCPadMXtHXUqOwIDAQABo4IB
czCCAW8wDgYDVR0PAQH/BAQDAgEGMB0GA1UdJQQWMBQGCCsGAQUFBwMCBggrBgEF
BQcDATASBgNVHRMBAf8ECDAGAQH/AgEAMC8GA1UdHwQoMCYwJKAioCCGHmh0dHA6
Ly9jcmxzMi53b3NpZ24uY24vY2EyLmNybDBwBggrBgEFBQcBAQRkMGIwJgYIKwYB
BQUHMAGGGmh0dHA6Ly9vY3NwMi53b3NpZ24uY24vY2EyMDgGCCsGAQUFBzAChixo
dHRwOi8vYWlhMi53b3NpZ24uY24vY2EyZzItc2VydmVyMS1mcmVlLmNlcjAdBgNV
HQ4EFgQUMNp0hvMokFae1zExwr1ZzZMSOR0wHwYDVR0jBBgwFoAU4E2/3JtBXRPo
ZPCn6RWk4YHBujEwRwYDVR0gBEAwPjA8Bg0rBgEEAYKbUQYBAgICMCswKQYIKwYB
BQUHAgEWHWh0dHA6Ly93d3cud29zaWduLmNvbS9wb2xpY3kvMA0GCSqGSIb3DQEB
CwUAA4ICAQBbCJgtcYOHa2WELfGAcTXZawWomqwm56yyVnowYt+4F5chlEdx8SRu
aYPzurYbMJuY0u1fs7NqmFw/A/oXbNy0j37h2fOWVVVayGQIPtw8i3yAaIGTyEp5
lHQhjKebBq6SyRzSyrzQzWNst8pZlLH51m3KR1vs2zXPWcXmu3zyAc7p+Bghv0N/
/wo98IKJSXHscLMh5bXBVQLyd/et/YnN2MzHXJHN5ZrSby8P4WAWtr2AC0bl3922
KUnzHCBKIM4VAxNXOhuXt5pn1yoyKbFh/xGbpnMtFBud5KEPCPR7umQRiESRYsLy
aMx0INAHknGLevWUKdAF9PTX5Yt+LIwNiYmZsIJYCA2vEmhXWoLaz6xKySt6jDhG
2ITIuuz6dY5sJMV5eDFnrWMAR3qTHBy5TGF4nWtsHuADhx0vkTdlodVxZaDI5VuN
DjCfhAvMpDvMQc5I4CuSLTtyzUMMsIKSxlG58FQ/S0nVfqQlpJDzt+7pSW1fb0wF
tyQjVsUymi/o0Q8CNJxvKGDeQiAvYwsjd1kWxKpiV+uXcqLlPUTdnv5jP7oNE2uL
rCk64HjrrqEDIShimAuTKxXpNUbknxGehrtEIQcXfsl6MDJhmPuwx/9tzdu9uOYy
E9MX9CFzVIWohrOAOVFtWcYTzi/LhyTDIZebcHNeaxdjedEoLB44oQ==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIGTTCCBDWgAwIBAgIHH86n9ql/6TANBgkqhkiG9w0BAQsFADB9MQswCQYDVQQG
EwJJTDEWMBQGA1UEChMNU3RhcnRDb20gTHRkLjErMCkGA1UECxMiU2VjdXJlIERp
Z2l0YWwgQ2VydGlmaWNhdGUgU2lnbmluZzEpMCcGA1UEAxMgU3RhcnRDb20gQ2Vy
dGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMDYwOTE3MjI0NjM2WhcNMTkxMjMxMjM1
OTU5WjBGMQswCQYDVQQGEwJDTjEaMBgGA1UEChMRV29TaWduIENBIExpbWl0ZWQx
GzAZBgNVBAMMEkNBIOayg+mAmuagueivgeS5pjCCAiIwDQYJKoZIhvcNAQEBBQAD
ggIPADCCAgoCggIBANBJIR4l/IfBKsKs23aGBk7n0HQ03O1lNfxQ1og/pPB/6w9f
eS+Jsf28Y1g3k5s4+LdbqfrYcce0vICXjWxL8VDVKimqqBl6luaVjnTtlwpXdfQF
220LObkBf6r21tps5gXgpE1S/NvQdLcRjHuNT/+Hg67/BQMTV1A3/oyWUhBMX7+U
cWnZlj4MQ0++MMCfOXRPBkVdo9ZWOWgHzIdPUHeTcdlECLGKNOmJrNubTuHZ5FJF
jC4UH5FrGR1oKSxWxOIeE1dk8GHjuRHfsOFXoBut11/Rr9srLT/QaI4P6p8PizVY
GxMc9N41oQpd1urfEm/A+2kHRnLcgfYEIxfgTXXhcm+wKOub4eGDoZ9KXa/Mm/oC
ILYYYneRO6PVZa3cfJB3HERBpEqL65Vy6fYJZNyoLZ90eOjBogljnO+g20+dlasg
T7ew94dcpqDkNzjHXOM1Dyyto4Ci7C5dwM/tiwXC5nNu9onV9dJGjuptYxseisl9
pvic6+XVY4VNc2ZpEf7IDvTBx2ZJU37kGWvx6XpZo21+xRfmJ8bvG9tv/A1NBgG0
DlwwRlVgrzhlOspHuqwszEYfskaWP/PtJgXud6Fqa34tbVhcStSOZ7jx2tVGiif5
EfLJQv5O3t8fXMSkhocWM6GnFxilDeQF5SvCKwuilZC5/WA8Tok+55zuH7sBAgMB
AAGjggEHMIIBAzASBgNVHRMBAf8ECDAGAQH/AgECMA4GA1UdDwEB/wQEAwIBBjAd
BgNVHQ4EFgQU4E2/3JtBXRPoZPCn6RWk4YHBujEwHwYDVR0jBBgwFoAUTgvvGqRA
W6UXaYcwyjRoQ9BBrvIwaQYIKwYBBQUHAQEEXTBbMCcGCCsGAQUFBzABhhtodHRw
Oi8vb2NzcC5zdGFydHNzbC5jb20vY2EwMAYIKwYBBQUHMAKGJGh0dHA6Ly9haWEu
c3RhcnRzc2wuY29tL2NlcnRzL2NhLmNydDAyBgNVHR8EKzApMCegJaAjhiFodHRw
Oi8vY3JsLnN0YXJ0c3NsLmNvbS9zZnNjYS5jcmwwDQYJKoZIhvcNAQELBQADggIB
AI274T7wqbpK6IUpiNBGwjQCnLQYCkkOse9rVge7hwFTdK2gpoA1bNcBmrmEubOP
jRBVHNhW+bXyJIc+UBs8RdjcgJMmGHSVhMPs2zvncMwx5b2FHvr4ajWwXcL3INlF
vwJYifZgzi9FSe+Xg9KLqfQMSZNCpIop57BJ8F/hhnWcmjNvCtPod9jaV91SMy/R
xN6FfVNV8V/TJNYlJYNjLF9xSHxgpLYu5WHPFzHzyFdPlDdtWZbgoTyXJ0zKwsMV
w1zS6WDAGRWHgWlRRXPbmBSBPhXk5JfSBLX8M/uHJGl1t6frghUdSqw7EiOJn7T8
JE7dIsi3zx462waTg7jKDLpzC34/PEvPYcF7X5pybb/TQVjjGzWZg61sQERjfN7B
ePHm6SGg74pOkX4XVVuX8SnaH/Y+dTmaZfGJKDs50PU7PpF5qA2x1FaeIFuzklqt
H4DHm6uaOsO5HOIWstKhtlH9xnb2l9vxF581/Tlxea6OUtHfk4J7GvGcowyADI8g
7OOYkS8e9GQ2DBVqacq0VrnIFA0uAXGTL27Oh6VYFmZ61MjVEhXF5y4yHQ8KFpQK
vFCV0S6lX0VqalP0cPBCUftf1L8qBqy5FMQDhlET6Lwh0FT1iTvz03xlQMRZBzyS
EkE9+JcNYJ8zFJKmjFvuStRRmMJTdkorYuwFw2tQZLFs
-----END CERTIFICATE-----`,
    key: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA14Z6zE0k3QyDF8wTnKR4U86/KFJ1qF7bKlngVhz5ZUtGJyS3
qAECoCKGjRfb77paDhwS9p336OHWxVbJP8we4qb9LKFP1tZTnTwI1mEKnrfz/sZx
MyJoDcPU8ORYmX+htRmUkNqUSfGwpORPgjJ16vxZ6ZkESsu1p5xpLfxSiv0xkWmY
tuyHRguigtN/KgGUO0pP2lNGDXEFSlxZQ3FalvDBBZMR5WbwCCEm0YGYj6vwtyHS
Gw/xSbU8S4/ZxDh/VD7dJicZmwQprgCiwYfPggtn+nE8Dqwzx6HLee7LgE6GYtPP
pkIZMKNfnKVZLcUhAkHbKTyUDnM3nAs7YK78XwIDAQABAoIBAGR6DFuch1gKUj9Q
47++KV6g3xtUPgftmO1Ikz5yKY6gpibvhjNrrSaskd/LRLyhOwSi7/BLOt02FCNR
z2bPqYJu6U7aMVdt+fMunswa15GhHr4jE3kMTEhGiMp5GhkNmHzOXSWe0U0bwQdO
bQa8sZ6IYP53WLnp+FkYoSxQGscyYbgUeyqO/axTPmXDfmDngH7VJm1UF+7WMtOJ
CiWOVhvj58wqeUdQk7uY1y385dfr5Ndd/r4CVN/ndhK3FeJ4LBz6qB3F1YGOrlqq
++3WI/7j5+unVoT/o9DP9Wa4D5mZGYZNiYYWkk6FwdRHA6ZvlJwYFZQREc7bO8ki
yZztgNkCgYEA80tlUv6JzthYoGlE++pM/6YpWS5h9VX36Ka3zL78vo3aN+vkL02y
hbRGPsJ+NvOOdGADY0rnQ8ENbcoPsMzcOpvgQc3m4WjKdehcau6xa2VuubSAZgoj
H+HtO6Y5F7ALUem85z2itrm5xDVa8aNjDjfSZH+ib2lk1+Qwl11OBqsCgYEA4sfW
YQ9qb3iPGUAou7PSKbLeTrAT02LNqn72DY46yAGHuFkmoeSD4muuChhYvQZjAd0u
r93iBQycmI2BmJ5cBUQBbKmRfgoOMyc8Ycc0/XQUe81xH6YFNDxpcX+F9PQtSwz8
EDhK2usk03de+80V4B41xO/PzXRocyu80oS0sR0CgYEAwCZb8CB4VpUn6gk6Inv6
NC7XmUe4tjsfgO+rWlm85ALExkXYAkQrKs4mbIrPhDb325G5G0KdRDXElWFw4wHp
LaDOjSpBnuVUgary0sGR/nAt8x1MC0sWUqfs5Z9yl/LB/f/M4hUb3ZTx0rURDqcs
JJ6R3C2x7KwgqSHf/qwCY+ECgYB6A+U/UakFkssDXfbMjwKrdtaPZcM0/7sCWc8P
GhBcXh5kvGrBvg6Lez4nplPQWCha72NYMjySVOfIWJJ6x/Fgz+coTM/ADa74LMsb
HLBREeyXc8DCs3OnWD2vWFp9ogbgk3rnSzJTOSMWN+q99ekoLXjmndSjiVdNaCHu
7oG9rQKBgBLQU32St8KrtUoNyYQTevaF0ItJ6NJSPcQ4bbGkCE5fARaMAiHiJVsm
qPwwtT6YxeGBxJXhP1k7sZ1arsZH+PnGCvaiLPMKX3OqoWx2j7ZAEQdebpAd28JH
1OJqUFwE8ecPrAUE4enoqgMQ0Icz89Thp9Aq2563oKpT8RtEWN8h
-----END RSA PRIVATE KEY-----`,
  },

  env: 'development',
  debug: true,

  session: {
    secret: 'proxy_secret',
    name: 'session',
    maxAge: 60 * 60 * 24 * 30 * 1000,
  },

  redis: {
    proxy: {
      host: '127.0.0.1',
      port: 6379,
      keyPrefix: 'proxy:',
    },
    session: {
      host: '127.0.0.1',
      port: 6379,
      keyPrefix: 'proxy:session:',
    },
    wechat: {
      host: '127.0.0.1',
      port: 6379,
      keyPrefix: 'proxy:wechat:',
    },
  },

  mysql: {
    proxy: {
      poolSize: 5,
      host: '127.0.0.1',
      user: 'proxy',
      password: 'password',
      database: 'proxy',
    },
  },

  wechat: {
    proxy: {
      corpid: 'corpid',
      secret: 'secret',
      apps: {
        system: {
          agentid: 0,
        },
      },
    },
  },

  logger: {
    file: {
      filename: '/tmp/proxy.log',
    },
  },

  client_dir: path.join(__dirname, '../../client'),
};

module.exports = config;
