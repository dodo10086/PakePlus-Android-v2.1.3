console.log('main.js---')

function sayHello() {
    alert('你好，这是本地JS代码！')
}

// 打开知乎
function openZhihu() {
    window.location.href =
        'zhihu://feed?open=1&utm_medium=homepage&callback_source=others&page_id=10148&ab_group=&mcid=34f94891-26f7-4d5b-9bbe-3b19d3e19919&fallback_url=https%3A%2F%2Fwww.zhihu.com%2Foia%2Ffeed%3Fopen%3D1%26utm_medium%3Dhomepage%26callback_source%3Dothers%26page_id%3D10148%26ab_group%3D%26mcid%3D34f94891-26f7-4d5b-9bbe-3b19d3e19919%26fallback_url%3Dhttps%253A%252F%252Foia.zhihu.com%252Ffeed%253Futm_medium%253Dhomepage%2526callback_source%253Dothers%2526page_id%253D10148%2526ab_group%253D%2526mcid%253D34f94891-26f7-4d5b-9bbe-3b19d3e19919'
    showMessage('正在打开知乎...', 'success')
}

function openWechat() {
    try {
        window.location.href = 'weixin://'
        showMessage('正在打开微信...', 'success')
        checkResult()
    } catch (e) {
        showMessage('打开失败: ' + e.message, 'error')
    }
}

function openWechatScan() {
    try {
        window.location.href = 'weixin://dl/scan'
        showMessage('正在打开微信扫一扫...', 'success')
        checkResult()
    } catch (e) {
        showMessage('打开失败: ' + e.message, 'error')
    }
}

function openWechatChat() {
    try {
        // 示例：打开与特定用户的聊天
        window.location.href = 'weixin://dl/chat?wxid=example_user'
        showMessage('正在打开聊天窗口...', 'success')
        checkResult()
    } catch (e) {
        showMessage('打开失败: ' + e.message, 'error')
    }
}

function checkResult() {
    // 延迟检查是否成功打开
    setTimeout(() => {
        if (document.hasFocus()) {
            showMessage('可能未安装微信或打开失败', 'error')
        }
    }, 2000)
}

function showMessage(msg, type) {
    const result = document.getElementById('result')
    result.textContent = msg
    result.className = 'result ' + type
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded-----')
    const getdata = document.querySelector('#getdata')
    getdata.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('getdata')
        fetch('https://api.github.com/users/octocat')
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data)
                const greetMsgEl = document.querySelector('#greet-msg')
                greetMsgEl.textContent = data.login
            })
            .catch((error) => {
                console.error('error', error)
            })
    })
})
