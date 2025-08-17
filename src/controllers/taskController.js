import Task from '../models/Task.js';

// Create a new task
export const createTask = async (req, res, next) => {
  try {
    const { title } = req.body;
    const task = new Task({ title, user: req.user.id });
    await task.save();
    console.log('📝 Task Created:', task); // Log to terminal
    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task
    });
  } catch (error) {
    next(error);
  }
};

// Get all tasks for the user
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    console.log(`📋 Fetched ${tasks.length} tasks for user ${req.user.id}`);
    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    next(error);
  }
};

// Get a single task
export const getTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
    if (!task) {
      console.log(`❌ Task not found: ${req.params.id}`);
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    console.log('🔍 Task fetched:', task);
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

// Update a task
export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) {
      console.log(`❌ Task not found for update: ${req.params.id}`);
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    console.log('✏️ Task updated:', task);
    res.status(200).json({ success: true, message: 'Task updated', data: task });
  } catch (error) {
    next(error);
  }
};

// Delete a task
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!task) {
      console.log(`❌ Task not found for deletion: ${req.params.id}`);
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    console.log('🗑️ Task deleted:', task);
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    next(error);
  }
};

