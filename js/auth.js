const SUPABASE_URL = 'https://mfwpuuqgwosuieiddzoe.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1md3B1dXFnd29zdWllaWRkem9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDcxMTUsImV4cCI6MjAyNDE4MzExNX0.f91VQpQS9ZWPb43fzai0dFblL9XfKUJABS_Dwu_eD8Q'
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.userToken = null;

function AuthCheck(e) {
    e.preventDefault();
    const id = document.getElementById('id');
    const password = document.getElementById('password');

    if( id && password ) {
        if(id.value.length<1 || password.value.length<1)
        {
            alert('Please check your password');
        }
        else {
            console.log(Login(id, password));
        }
    }

}

function addHandler() {
    const btn = document.getElementById('login');
    btn.addEventListener('click', function (e) {AuthCheck(e) }, false);
}

async function Login( username, password) {
    let { data, error } = await supabase.auth.signUp({
        email: username,
        password: password
      })
    if (error) {
        return false;
    }
    else {
        console.log(data);
        return true;
    }
}

addHandler();