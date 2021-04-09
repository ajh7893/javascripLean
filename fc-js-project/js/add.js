function getToken() {
    return localStorage.getItem('token');
}

async function getUserByToken(token) {
    //토큰 가져오기 
    try {
        //await 쓰려면 async를 써야한다.
        const res = await axios.get('https://api.marktube.tv/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log('getUserByToken error', error);
        return null;
    }
}

async function save(event) {
    //이벤트 막기
    event.preventDefault();
    event.stopPropagation();
    //부트스트랩 기능
    event.target.classList.add('was-validated');

    const titleElement = document.querySelector('#title');
    const messageElement = document.querySelector('#message');
    const authorElement = document.querySelector('#author');
    const urlElement = document.querySelector('#url');

    const title = titleElement.value;
    const message = messageElement.value;
    const author = authorElement.value;
    const url = urlElement.value;

    if (title === '' || message === '' || author === '' || url === '') {
        return;
    }

    //토큰값이 없으면 로그인 페이지로
    const token = getToken();
    if (token === null) {
        location.href = '/login';
        return;
    }

    try {
        
        await axios.post(
            'https://api.marktube.tv/v1/book', {
                title,
                message,
                author,
                url,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        location.href = '/';
    } catch (error) {
        console.log('save error', error);
        alert('책 추가 실패');
    }
}

function bindSaveButton() {
    const form = document.querySelector('#form-add-book');
    form.addEventListener('submit', save);
}

async function main() {
    // 버튼에 이벤트 연결
    bindSaveButton();

    // 토큰 체크
    const token = getToken();
    if (token === null) {
        location.href = '/login';
        return;
    }

    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if (user === null) {
        localStorage.clear();
        location.href = '/login';
        return;
    }
}

document.addEventListener('DOMContentLoaded', main);