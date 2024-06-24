const controller = {}

controller.list = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM tb_paciente',(err, pacientes) => {
            if(err){
                res.json(err)   
            }
            res.render('pacientes', {
                data: pacientes 
            })
        })
    })
}

controller.save = (req,res) => {
    const data= req.body;
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO tb_paciente set ?', [data], (err,paciente) => {
            if(err){
                console.log('Error al insertar datos: ', err)
                return;
            }
            res.redirect('/')
        })
    })
}
controller.edit = (req,res) => {
    const {idpx} = req.params
    req.getConnection ((err,conn)=>{
        conn.query('SELECT * FROM tb_paciente WHERE IdPx=?',[idpx],(err,paciente)=>{
            res.render('paciente_edit',{
                data:paciente[0]
            })
        })
    })

}
controller.update = (req,res) =>{
    const {idpx} = req.params
    const newPaciente = req.body
    req.getConnection((err,conn)=>{
        conn.query('UPDATE tb_paciente set ? where IdPx= ?', [newPaciente,idpx] , (err, rows) =>{
            res.redirect('/') //mostrar la pantalla inicial
        })
    })
}

controller.delete = (req, res) => {
    const {idpx} = req.params
    res.redirect('/')
    //req.getConnection((err,conn) =>{  //EN LUGAR DE UNA QUERY PARA ELIMINAR, COLOCAMOS UN BORRADO LOGICO
    //    conn.query('')
    //})
}

module.exports = controller 

//npm run dev