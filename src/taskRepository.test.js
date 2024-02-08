const tasksRepository = require("./tasksRepository");

describe("pruebas", () => {

    // prueba unitaria
    test("Get all tasks", () => {
        // Arrange
        let tasks = [];

        // Act 
        tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(2);
        expect(tasks.length == 2).toBe(true);
        expect(Array.isArray(tasks)).toBe(true); // Corrected to check if it's an array
    });

    test("Get task by ID", () => {
        // Arrange
        const taskId = 1;

        // Act 
        const task = tasksRepository.getTaskById(taskId);

        // Assert
        expect(task.id).toBe(taskId);
        // Add more assertions based on the properties of the task
    });

    // prueba unitaria
    test("Update task status", () => {
        // Arrange
        const taskId = 1;

        // Act 
        tasksRepository.updateTaskStatus(taskId, true);
        const updatedTask = tasksRepository.getTaskById(taskId);

        // Assert
        expect(updatedTask.completed).toBe(true);
    });

    // prueba unitaria
    test("Delete a task", () => {
        // Arrange
        const taskId = 1;

        // Act 
        tasksRepository.deleteTask(taskId);
        const tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(1);
        expect(tasks.every(task => task.id !== taskId)).toBe(true);
    });

    // prueba unitaria
    test("Add a new task", () => {
        // Arrange
        const newTask = { id: 3, title: "New Task", completed: false };

        // Act 
        tasksRepository.addTask(newTask);
        const tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(3);
        expect(tasks.some(task => task.id === 3)).toBe(true);
    });

});
