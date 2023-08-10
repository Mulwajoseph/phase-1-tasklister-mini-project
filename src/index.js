  document.addEventListener("DOMContentLoaded", () => {
    //event listener that listens for the form submission
    document.querySelector("form").addEventListener('submit',(e) => {
      //prevents any default behaviour from happening to our event
      e.preventDefault()
      //handles new tasks
      handleTodo()
    })
  })
  function handleTodo(){
    // Get the input field for assigning the task
    const assighneeinput = document.getElementById('new-task-asighnee')
      // Get the input field for the task description
    const taskDescriptionInput = document.getElementById("new-task-description")
    //Retrieves user value and taskdescription it also adds the new asighneeand holds text entered by user for next task description and removes any whitespaces 
    const assighnee = assighneeinput.value.trim()
    const taskDescription = taskDescriptionInput.value.trim();
 //Color change value gets the selected valueor selects the priority value
    const selectPriority = document.getElementById('task-priority').value;
    //checks if both the assignee and task descriptions are not empty
  if (taskDescription !== "" && assighnee !== ""){
    //gets the task list container
    const taskList = document.getElementById("list")
    //takes in the new task as a list
    const newtask = document.createElement("li")

      // Apply color based on priority
      if (selectPriority === "high") {
        newtask.style.color = "red";
      } else if (selectPriority === "medium") {
        newtask.style.color = "yellow";
      } else if (selectPriority === "low") {
        newtask.style.color = "green";
      }else if (selectPriority ==="minute"){
        newtask.style.color = "white";
      }
    //create a bbutton to delete a task
    let btn =document.createElement('button')
    //event  listener to delete 
    btn.addEventListener('click',handleDelete)
    btn.textContent=  'Delete'

    //set the new content of the new task list item 
    newtask.textContent = `${assighnee} - ${taskDescription} `;
    //append the new task list item to the list container
    taskList.appendChild(newtask)
    //appends the delete button to the new task list item
    newtask.appendChild(btn)
    


    //clears input field after adding the task
    assighneeinput.value = "";
    taskDescriptionInput.value = "";

  }
  function handleDelete(e){
    e.target.parentNode.remove()
  }
  }