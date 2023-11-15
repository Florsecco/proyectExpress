const mainController={
    home:(req,res)=>{
       return res.render('home')
    },
    about: (req,res)=>{
        return res.render('about')
    },
    register: (req,res)=>{
        return res.render('register')
    }
}

module.exports= mainController