// Function to handle request from interface. It's attached with delete button of table view
function deleteProduct(id){
    const result = confirm(`Are you sure you want to delete?`)
    if(result){
        fetch("/delete-product/"+id,{
            method:'POST'
        }).then((res)=>{
            if(res.ok){
                location.reload()
            }
        })
    }
}