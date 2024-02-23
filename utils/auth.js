import { createClient } from '@supabase/supabase-js'
import { supabse_url, anon_key } from '../secrets/env';
const supabase = createClient( supabse_url, anon_key);

const login = async (id, passcode) => {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: id,
        password: passcode
      })
    if (error) {
        return { state: false, info: error.message }
        }
    else {
        return { state: true, info: data }
    }
}

const createUser = async (id, passcode) => {
    let { data, error } = await supabase.auth.signUp({
        email: id,
        password: passcode
      })
    if (error) {
        return { state: false, info: error.message }
        }
    else {
        return { state: true, info: data }
    }
}

const logout = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) { return false; }
    else { return true; }
}


export { supabase, login, createUser, logout }