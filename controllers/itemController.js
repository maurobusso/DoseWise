const supabase = require('../config/supabaseConfig')

//home page route
exports.getIndex = (req, res) => {
    res.render('index')
}

//needs to be async because we are talking with something outside the app (mongoDB)
// exports.getItems = async (req, res) => {
//     const {data, error} = await supabase.from('items').select('*')

//     if(error){
//         console.error(error)
//         res.redirect('/item?error=true')
//     }else{
//         res.render('item', {items: data, medications: dataMed})
//     }
// }

exports.getItems = async (req, res) => {
    const {data, error} = await supabase.from('medications').select('*')
    
    if(error){
        console.error(error)
        res.redirect('/item?error=true')
    }else{
        res.render('item', {medications: data})
    }
}


//create
exports.createItem = async (req, res) => {
    const {data, error} = await supabase.from('items').insert([req.body])
    if(error){
        console.error(error)
        res.redirect('/item?error=true')
    }else{
        res.redirect('/item')
    }
}


//Update
// WHERE clause is == to '.eq('id', id)'
exports.updateItem = async (req, res) => {
    const { id } = req.params
    const {data, error} = await supabase.from('items').update(req.body).eq('id', id)
    if(error){
        console.error(error)
        res.redirect('/item?error=true')
    }else{
        res.redirect('/item')
    }
}


//Delete
// WHERE clause is == to '.eq('id', id)'
exports.deleteItem = async (req, res) => {
    const { id } = req.params
    //console.log(id)
    const {data, error} = await supabase.from('items').delete().eq('id', id)
    if(error){
        console.error(error)
        res.redirect('/item?error=true')
    }else{
        res.status(200).json({message: 'item deleted'})
    }
} 

exports.getInjectionHistory = async (req, res) => {
    const {data, error} = await supabase.from('items').select('*')
    if(error){
        console.error(error)
        res.redirect('/item?error=true')
    }else{
        res.render('injectionHistory', {items: data})
    }
}

exports.getContact = (req, res) => {
    res.render('contact')
}

//create patient
exports.createPatient = async (req, res) => {
    //console.log(req.body)
    const {data, error} = await supabase.from('items').insert([req.body])
    if(error){
        console.error(error)
        res.redirect('/item?error=true')
    }else{
        res.redirect('/item')
    }
}

exports.getMedications = async (req, res) => {
    const {data, error} = await supabase.from('medications').select('*')
    
    if(error){
        console.error(error)
        res.redirect('/index?error=true')
    }else{
        res.render('medications', {medications: data})
    }
}

//Delete medication
exports.deleteMedication = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const {data, error} = await supabase.from('medications').delete().eq('id', id)
    if(error){
        console.error(error)
        res.redirect('/medications?error=true')
    }else{
        res.status(200).json({message: 'medication deleted'})
    }
}

exports.getGuidelines = async (req, res) => {
    res.render('guidelines')
}


exports.createLa = async (req, res) => {
    console.log(req.body)
    const {data, error} = await supabase.from('medications').insert([req.body])
    if(error){
        console.error(error)
        res.redirect('/medications?error=true')
    }else{
        res.redirect('/medications')
    }
}