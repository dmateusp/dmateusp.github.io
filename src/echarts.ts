import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
  PieChart,
  TreemapChart,
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // Dataset
  DatasetComponent,
  // Built-in transform (filter, sort)
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  GraphicComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import type {
  // The series option types are defined with the SeriesOption suffix
  BarSeriesOption, 
  LineSeriesOption,
  PieSeriesOption,
  CustomSeriesOption,
  TreemapSeriesOption,
} from 'echarts/charts';
import type {
  // The component option types are defined with the ComponentOption suffix
  TitleComponentOption, 
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  ToolboxComponentOption,
} from 'echarts/components';
import type { 
  ComposeOption,
} from 'echarts/core';

// Create an Option type with only the required components and charts via ComposeOption
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | PieSeriesOption
  | CustomSeriesOption
  | TreemapSeriesOption
  | ToolboxComponentOption
>;

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  GraphicComponent,
  BarChart,
  LineChart,
  TreemapChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  PieChart,
]);

export default echarts;
