function validateForm(){
    var tamil = document.getElementById('tamil').value;
    var english = document.getElementById('english').value;
    var maths = document.getElementById('maths').value;
    var science = document.getElementById('science').value;
    var socialscience = document.getElementById('socialscience').value;
    
    if (tamil == ''){
        alert('Tamil mark is required!')
        return false;
    }
    else if(tamil < 1){
        alert('Tamil marks must not be zero or less than zero')
        return false;
    }
    else if(tamil > 100){
        alert('Tamil marks must not be greater than hundred')
        return false;
    }
    
    if (english == ''){
        alert('English mark is required!')
        return false;
    }
    else if(english < 1){
        alert('English marks must not be zero or less than zero')
        return false;
    }
    else if(english > 100){
        alert('English marks must not be greater than hundred')
        return false;
    }

    if (maths == ''){
        alert('Maths mark is required!')
        return false;
    }
    else if(maths < 1){
        alert('Maths marks must not be zero or less than zero')
        return false;
    }
    else if(maths > 100){
        alert('Maths marks must not be greater than hundred')
        return false;
    }
    
    if (science == ''){
        alert('Science mark is required!')
        return false;
    }
    else if(science < 1){
        alert('Science marks must not be zero or less than zero')
        return false;
    }
    else if(science > 100){
        alert('Science marks must not be greater than hundred')
        return false;
    }
    
    if (socialscience == ''){
        alert('Socialscience mark is required!')
        return false;
    }
    else if(socialscience < 1){
        alert('Socialscience marks must not be zero or less than zero')
        return false;
    }
    else if(socialscience > 100){
        alert('Socialscience marks must not be greater than hundred')
        return false;
    }
    return true;
}

function showData(){
    var markList;
    if(localStorage.getItem("markList") == null){
        markList = [];
    }
    else{
        markList = JSON.parse(localStorage.getItem("markList"))
    }
    var html = '';

    markList.forEach(function (element,index){
        html += "<tr>";
        html += "<td>" + element.tamil +"</td>";
        html += "<td>" + element.english +"</td>";
        html += "<td>" + element.maths +"</td>";
        html += "<td>" + element.science +"</td>";
        html += "<td>" + element.socialscience +"</td>";
        html += '<td><button onclick="deleteData('+
                index +
                ')" class="btn btn-outline-danger btn-sm">Delete</button><button onclick="updateData('+
                index +')" class="btn btn-outline-primary btn-sm m-2">Edit</button></td>';
        html +="</tr>";
    }); 

    document.querySelector('#crudTable tbody').innerHTML = html;
}

document.onload = showData();

function AddData(){
    if(validateForm() == true){
        var tamil = document.getElementById('tamil').value;
        var english = document.getElementById('english').value;
        var maths = document.getElementById('maths').value;
        var science = document.getElementById('science').value;
        var socialscience = document.getElementById('socialscience').value;
        
        var markList;
        if(localStorage.getItem("markList") == null){
            markList = [];
        }
        else{
            markList = JSON.parse(localStorage.getItem("markList"))
        }

        markList.push({
            tamil:tamil,
            english:english,
            maths:maths,
            science:science,
            socialscience:socialscience
        });

        localStorage.setItem('markList',JSON.stringify(markList));
        showData();
        document.getElementById('tamil').value="";
        document.getElementById('english').value="";
        document.getElementById('maths').value="";
        document.getElementById('science').value="";
        document.getElementById('socialscience').value="";
    }
}

function deleteData(index){
    var markList;
    if(localStorage.getItem("markList") == null){
        markList = [];
    }
    else{
        markList = JSON.parse(localStorage.getItem("markList"))
    }

    markList.splice(index,1);
    localStorage.setItem("markList",JSON.stringify(markList));
    showData();
}

function updateData(index){
    document.getElementById('Submit').style.display = 'none';
    document.getElementById('Update').style.display = 'block';

    var markList;
    if(localStorage.getItem("markList") == null){
        markList = [];
    }
    else{
        markList = JSON.parse(localStorage.getItem("markList"))
    }

    document.getElementById('tamil').value = markList[index].tamil;
    document.getElementById('english').value = markList[index].english;
    document.getElementById('maths').value = markList[index].maths;
    document.getElementById('science').value = markList[index].science;
    document.getElementById('socialscience').value = markList[index].socialscience;

    document.querySelector('#Update').onclick = function(){
        if(validateForm() == true ){
            markList[index].tamil = document.getElementById('tamil').value;
            markList[index].english = document.getElementById('english').value;
            markList[index].maths = document.getElementById('maths').value;
            markList[index].science = document.getElementById('science').value;
            markList[index].socialscience = document.getElementById('socialscience').value;

            localStorage.setItem('markList',JSON.stringify(markList))
            showData();
            document.getElementById('tamil').value="";
            document.getElementById('english').value="";
            document.getElementById('maths').value="";
            document.getElementById('science').value="";
            document.getElementById('socialscience').value="";
            
            document.getElementById('Submit').style.display = 'block';
            document.getElementById('Update').style.display = 'none';

        }
    }
}