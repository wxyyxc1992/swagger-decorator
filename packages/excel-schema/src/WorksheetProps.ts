import { PaperSize } from './constants';
import { Alignment, Color, Margins } from './style';

export interface WorksheetProperties {
  /**
   * Color of the tab
   */
  tabColor: Partial<Color>;

  /**
   * The worksheet column outline level (default: 0)
   */
  outlineLevelCol: number;

  /**
   * The worksheet row outline level (default: 0)
   */
  outlineLevelRow: number;

  /**
   * Default row height (default: 15)
   */
  defaultRowHeight: number;

  /**
   * Default column width (optional)
   */
  defaultColWidth?: number;

  /**
   * 默认的对齐方式
   */
  defaultAlignment: Partial<Alignment>;

  /**
   * default: 55
   */
  dyDescent: number;
  showGridLines: boolean;
}

export interface PageSetup {
  /**
   * Whitespace on the borders of the page. Units are inches.
   */
  margins: Margins;

  /**
   * Orientation of the page - i.e. taller (`'portrait'`) or wider (`'landscape'`).
   *
   * `'portrait'` by default
   */
  orientation: 'portrait' | 'landscape';

  /**
   * Horizontal Dots per Inch. Default value is 4294967295
   */
  horizontalDpi: number;

  /**
   * Vertical Dots per Inch. Default value is 4294967295
   */
  verticalDpi: number;

  /**
   * Whether to use fitToWidth and fitToHeight or scale settings.
   *
   * Default is based on presence of these settings in the pageSetup object - if both are present,
   * scale wins (i.e. default will be false)
   */
  fitToPage: boolean;

  /**
   * How many pages wide the sheet should print on to. Active when fitToPage is true
   *
   * Default is 1
   */
  fitToWidth: number;

  /**
   * How many pages high the sheet should print on to. Active when fitToPage is true
   *
   * Default is 1
   */
  fitToHeight: number;

  /**
   * Percentage value to increase or reduce the size of the print. Active when fitToPage is false
   *
   * Default is 100
   */
  scale: number;

  /**
   * Which order to print the pages.
   *
   * Default is `downThenOver`
   */
  pageOrder: 'downThenOver' | 'overThenDown';

  /**
   * Print without colour
   *
   * false by default
   */
  blackAndWhite: boolean;

  /**
   * Print with less quality (and ink)
   *
   * false by default
   */
  draft: boolean;

  /**
   * Where to place comments
   *
   * Default is `None`
   */
  cellComments: 'atEnd' | 'asDisplayed' | 'None';

  /**
   * Where to show errors
   *
   * Default is `displayed`
   */
  errors: 'dash' | 'blank' | 'NA' | 'displayed';

  /**
   * 	What paper size to use (see below)
   *
   * | Name                          | Value       |
   * | ----------------------------- | ---------   |
   * | Letter                        | `undefined` |
   * | Legal                         |  `5`        |
   * | Executive                     |  `7`        |
   * | A4                            |  `9`        |
   * | A5                            |  `11`       |
   * | B5 (JIS)                      |  `13`       |
   * | Envelope #10                  |  `20`       |
   * | Envelope DL                   |  `27`       |
   * | Envelope C5                   |  `28`       |
   * | Envelope B5                   |  `34`       |
   * | Envelope Monarch              |  `37`       |
   * | Double Japan Postcard Rotated |  `82`       |
   * | 16K 197x273 mm                |  `119`      |
   */
  paperSize: PaperSize;

  /**
   * Whether to show the row numbers and column letters, `false` by default
   */
  showRowColHeaders: boolean;

  /**
   * Whether to show grid lines, `false` by default
   */
  showGridLines: boolean;

  /**
   * Which number to use for the first page
   */
  firstPageNumber: number;

  /**
   * 	Whether to center the sheet data horizontally, `false` by default
   */
  horizontalCentered: boolean;

  /**
   * 	Whether to center the sheet data vertically, `false` by default
   */
  verticalCentered: boolean;

  /**
   * Set Print Area for a sheet, e.g. `'A1:G20'`
   */
  printArea: string;

  /**
   * Repeat specific rows on every printed page, e.g. `'1:3'`
   */
  printTitlesRow: string;

  /**
   * Repeat specific columns on every printed page, e.g. `'A:C'`
   */
  printTitlesColumn: string;
}

export interface HeaderFooter {
  /**
   * Set the value of differentFirst as true, which indicates that headers/footers for first page are different from the other pages, `false` by default
   */
  differentFirst: boolean;

  /**
   * Set the value of differentOddEven as true, which indicates that headers/footers for odd and even pages are different, `false` by default
   */
  differentOddEven: boolean;

  /**
   * Set header string for odd pages, could format the string and `null` by default
   */
  oddHeader: string;

  /**
   * Set footer string for odd pages, could format the string and `null` by default
   */
  oddFooter: string;

  /**
   * Set header string for even pages, could format the string and `null` by default
   */
  evenHeader: string;

  /**
   * Set footer string for even pages, could format the string and `null` by default
   */
  evenFooter: string;

  /**
   * Set header string for the first page, could format the string and `null` by default
   */
  firstHeader: string;

  /**
   * Set footer string for the first page, could format the string and `null` by default
   */
  firstFooter: string;
}

export interface WorksheetViewCommon {
  /**
   * Sets the worksheet view's orientation to right-to-left, `false` by default
   */
  rightToLeft: boolean;

  /**
   * The currently selected cell
   */
  activeCell: string;

  /**
   * Shows or hides the ruler in Page Layout, `true` by default
   */
  showRuler: boolean;

  /**
   * Shows or hides the row and column headers (e.g. A1, B1 at the top and 1,2,3 on the left,
   * `true` by default
   */
  showRowColHeaders: boolean;

  /**
   * Shows or hides the gridlines (shown for cells where borders have not been defined),
   * `true` by default
   */
  showGridLines: boolean;

  /**
   * 	Percentage zoom to use for the view, `100` by default
   */
  zoomScale: number;

  /**
   * 	Normal zoom for the view, `100` by default
   */
  zoomScaleNormal: number;
}

export interface WorksheetViewNormal {
  /**
   * Controls the view state
   */
  state: 'normal';

  /**
   * Presentation style
   */
  style: 'pageBreakPreview' | 'pageLayout';
}

export interface WorksheetViewFrozen {
  /**
   * Where a number of rows and columns to the top and left are frozen in place.
   * Only the bottom left section will scroll
   */
  state: 'frozen';

  /**
   * Presentation style
   */
  style?: 'pageBreakPreview';

  /**
   * How many columns to freeze. To freeze rows only, set this to 0 or undefined
   */
  xSplit?: number;

  /**
   * How many rows to freeze. To freeze columns only, set this to 0 or undefined
   */
  ySplit?: number;

  /**
   * Which cell will be top-left in the bottom-right pane. Note: cannot be a frozen cell.
   * Defaults to first unfrozen cell
   */
  topLeftCell?: string;
}

export interface WorksheetViewSplit {
  /**
   * Where the view is split into 4 sections, each semi-independently scrollable.
   */
  state: 'split';

  /**
   * Presentation style
   */
  style?: 'pageBreakPreview' | 'pageLayout';

  /**
   * How many points from the left to place the splitter.
   * To split vertically, set this to 0 or undefined
   */
  xSplit?: number;

  /**
   * How many points from the top to place the splitter.
   * To split horizontally, set this to 0 or undefined
   */
  ySplit?: number;

  /**
   * Which cell will be top-left in the bottom-right pane
   */
  topLeftCell?: string;

  /**
   * Which pane will be active
   */
  activePane?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

export type WorksheetView = WorksheetViewCommon &
  (WorksheetViewNormal | WorksheetViewFrozen | WorksheetViewSplit);
