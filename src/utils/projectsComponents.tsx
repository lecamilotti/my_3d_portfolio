const projectComponents = {
  Kanban: () => import('../projects/Kanban/index'),
  ObjectDetectionApp: () => import('../projects/ObjectDetection/index'),

  // Add other project mappings similarly
};

export default projectComponents;
