  const taskInput = document.getElementById("task");
  const addTaskButton = document.getElementById("addTask");
  const pendingTasksList = document.getElementById("pendingTasks");
  const completedTasksList = document.getElementById("completedTasks");

  addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = taskText;
      //listItem.addEventListener("click", function() {
        //completedTasksList.innerHTML = taskText;
        //toggleTaskStatus(listItem);
      //});

      const completeButton = document.createElement("button");
      completeButton.innerHTML = "complete";
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "delete";

      deleteButton.addEventListener("click",function(){
        listItem.innerHTML = "";
      });
      
      completeButton.addEventListener("click", function() {
        const completeItem = document.createElement("li");
        completeItem.innerHTML = taskText;
        completedTasksList.appendChild(completeItem);
        const backButton = document.createElement("button");
        backButton.innerHTML = "back";
        completeItem.appendChild(backButton);
        backButton.addEventListener("click",function(){
          completeItem.innerHTML = "";
          listItem.innerHTML = taskText;
          listItem.appendChild(completeButton);
          listItem.appendChild(deleteButton);
          pendingTasksList.appendChild(listItem);
        })
        completeItem.appendChild(deleteButton);
        deleteButton.addEventListener("click",function(){
          completeItem.innerHTML = "";
        });
        listItem.innerHTML = "";
      });

      


      listItem.appendChild(completeButton);
      listItem.appendChild(deleteButton);
      pendingTasksList.appendChild(listItem);
      taskInput.value = "";
    }

    else{
      
    }
  });

  /*function toggleTaskStatus(taskItem) {
    if (!taskItem.classList.contains("completed")) {
      taskItem.classList.add("completed");
      completedTasksList.appendChild(taskItem);
    } else {
      taskItem.classList.remove("completed");
      pendingTasksList.appendChild(taskItem);
    }
  }

  function deleteTask(taskItem) {
    taskItem.remove();
  }*/
