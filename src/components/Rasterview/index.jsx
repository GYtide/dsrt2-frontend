import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/dataZoom'
import ColorBar from '../ColorBar/ColorBar'
import CursorOverlay from './CursorOverlay'
import { array2canvasctx } from '../../util/array2canvasctx'
import { frameContext, cursorContext } from '../ImageView'
import { useEffect, useRef, useState, createContext, useContext } from 'react'

import option from './option'
 
