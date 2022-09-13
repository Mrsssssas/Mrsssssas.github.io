<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
<script>
    let webLog = {}
    let userAgent = navigator.userAgent
    console.log(userAgent);
    document.write(userAgent+'<br><br>')
    // 获取微信版本
    let m1 = userAgent.match(/MicroMessenger.*?(?= )/)
    if (m1 && m1.length > 0) {
        webLog.wechat = m1[0]
    }
    // 苹果手机
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
        // APP       Version 浏览器       MicroMessenger 微信/WebView
        // if (userAgent.match(/Version/i) == null && userAgent.match(/MicroMessenger/i) == null) {
        // 获取设备名
        if (userAgent.includes('iPad')) {
            webLog.device = 'iPad'
        } else {
            webLog.device = 'iPhone'
            document.write(webLog.device+'<br><br>')
        }
        // 获取操作系统版本
        m1 = userAgent.match(/iPhone OS .*?(?= )/)
        if (m1 && m1.length > 0) {
            webLog.system = m1[0]
            document.write(webLog.system+'<br><br>')
        }
        // }
    }
    // 安卓手机
    if (userAgent.includes('Android')) {
        // 获取设备名
        m1 = userAgent.match(/Android.*; ?(.*(?= Build))/)
        console.log(m1, '111');
        if (m1 && m1.length > 1) {
            webLog.device = m1[1]
            document.write(webLog.device+'<br><br>')
        }
        // 获取操作系统版本
        m1 = userAgent.match(/Android.*?(?=;)/)
        if (m1 && m1.length > 0) {
            webLog.system = m1[0]
            document.write(webLog.system+'<br><br>')
        }
    }
    console.log(webLog);

</script>
