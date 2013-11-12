/**
 * Created by marina on 11/13/13.
 */
exports.post = function(req, res){

    var title = req.body.title;
    var content = req.body.content;

    res.send ("title ");
    console.log (title + content);

};