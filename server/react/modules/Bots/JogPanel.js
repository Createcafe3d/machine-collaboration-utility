'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _Polygon = require('./Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class JogPanel extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      'div',
      { style: { maxWidth: `70vh`, height: `auto` } },
      _react2.default.createElement(
        'svg',
        { version: '1.1', id: 'Layer_1', x: '0px', y: '0px', viewBox: '0 0 1640.8 1047.1' },
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(_Polygon2.default, { fillColor: '#3C968D', endpoint: this.props.endpoint, points: '110.5,918.3 110.5,130.2 23.5,43.4 23.5,1007.2', axis: 'x', amount: -100 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#3C968D', endpoint: this.props.endpoint, points: '37.7,29.3 124.9,116.3 912.6,116.3 1001.3,29.3', axis: 'y', amount: 100 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#3C968D', endpoint: this.props.endpoint, points: '914.6,934.3 122.9,934.3 35.7,1023.2 1003.4,1023.2', axis: 'y', amount: -100 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#3C968D', endpoint: this.props.endpoint, points: '928.5,919.9 1017.4,1009 1017.4,41.6 928.5,128.6', axis: 'x', amount: 100 }),
            _react2.default.createElement('path', { fill: '#3C968D', d: 'M869,187.4' })
          ),
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(_Polygon2.default, { fillColor: '#59A29A', endpoint: this.props.endpoint, points: '124.9,116.3 212.1,206.1 825.4,206.1 912.6,116.3', axis: 'y', amount: 10 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#59A29A', endpoint: this.props.endpoint, points: '201.3,830.1 201.3,223.6 110.5,130.2 110.5,918.3', axis: 'x', amount: -10 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#59A29A', endpoint: this.props.endpoint, points: '837.8,831.7 928.5,919.9 928.5,128.6 837.8,222', axis: 'x', amount: 10 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#59A29A', endpoint: this.props.endpoint, points: '820.2,842.5 217.3,842.5 122.9,934.3 914.6,934.3', axis: 'y', amount: -10 })
          ),
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(_Polygon2.default, { fillColor: '#72ACA4', endpoint: this.props.endpoint, points: '212.1,206.1 306.1,298.2 733.1,298.2 825.4,206.1', axis: 'y', amount: 1 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#72ACA4', endpoint: this.props.endpoint, points: '295.5,735.8 295.5,315.9 201.3,223.6 201.3,830.1', axis: 'x', amount: -1 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#72ACA4', endpoint: this.props.endpoint, points: '745.6,737.6 837.8,831.7 837.8,222 745.6,314', axis: 'x', amount: 1 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#72ACA4', endpoint: this.props.endpoint, points: '727.9,748.3 311.3,748.3 217.3,842.5 820.2,842.5', axis: 'y', amount: -1 })
          ),
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(_Polygon2.default, { fillColor: '#9FC0BD', endpoint: this.props.endpoint, points: '389.8,410.2 295.5,315.9 295.5,735.8 389.8,641.5', axis: 'x', amount: -0.1 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#9FC0BD', endpoint: this.props.endpoint, points: '306.1,298.2 416.6,408.6 622.7,408.6 733.1,298.2', axis: 'y', amount: 0.1 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#9FC0BD', endpoint: this.props.endpoint, points: '633,653.4 402,653.4 311.3,748.3 727.9,748.3', axis: 'y', amount: -0.1 }),
            _react2.default.createElement(_Polygon2.default, { fillColor: '#9FC0BD', endpoint: this.props.endpoint, points: '634.6,626.7 745.6,737.6 745.6,314 634.6,425', axis: 'x', amount: 0.1 })
          )
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { fill: '#383535', d: 'M563.5,531.6L548,516.1c-0.8-0.8-1.7-1.1-2.7-1.1c-1,0-1.9,0.4-2.7,1.1c-0.8,0.8-1.1,1.7-1.1,2.7v7.7h-23.2v-23.2h7.7c1,0,2-0.4,2.7-1.1c0.8-0.8,1.1-1.7,1.1-2.7c0-1.1-0.4-2-1.1-2.7l-15.5-15.5c-0.8-0.8-1.7-1.1-2.7-1.1c-1,0-2,0.4-2.7,1.1l-15.5,15.5c-0.8,0.8-1.2,1.7-1.2,2.7c0,1,0.4,2,1.2,2.7c0.8,0.8,1.7,1.1,2.7,1.1h7.7v23.2h-23.2v-7.7c0-1-0.4-2-1.1-2.7c-0.8-0.8-1.7-1.1-2.7-1.1c-1,0-1.9,0.4-2.7,1.1l-15.5,15.5c-0.8,0.8-1.1,1.7-1.1,2.7c0,1,0.4,2,1.1,2.7l15.5,15.5c0.8,0.8,1.7,1.1,2.7,1.1c1.1,0,2-0.4,2.7-1.1c0.8-0.8,1.1-1.7,1.1-2.7V542h23.2v23.2H495c-1.1,0-2,0.4-2.7,1.2c-0.8,0.8-1.1,1.7-1.1,2.7c0,1,0.4,2,1.1,2.7l15.5,15.5c0.8,0.8,1.7,1.1,2.7,1.1c1,0,2-0.4,2.7-1.1l15.5-15.5c0.8-0.8,1.1-1.7,1.1-2.7c0-1.1-0.4-2-1.1-2.7c-0.8-0.8-1.7-1.2-2.7-1.2h-7.7V542h23.2v7.7c0,1,0.4,2,1.2,2.7c0.8,0.8,1.7,1.1,2.7,1.1c1,0,2-0.4,2.7-1.1l15.5-15.5c0.8-0.8,1.1-1.7,1.1-2.7C564.6,533.2,564.2,532.3,563.5,531.6z' })
          )
        ),
        _react2.default.createElement(
          'g',
          { className: 'jog jog_y_-100' },
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M458.5,984.1v5.8H445v-5.8H458.5z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M491.7,964v35.5h-6.1v-27.4l-6.2,5l-3.5-4.5l10.8-8.6H491.7z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M518.9,965c1.7,1,3,2.4,4.1,4.1c1.1,1.7,1.9,3.6,2.5,5.8c0.5,2.2,0.8,4.5,0.8,6.9c0,2.4-0.3,4.7-0.8,6.9c-0.5,2.2-1.4,4.2-2.5,5.9c-1.1,1.7-2.5,3-4.1,4.1c-1.7,1-3.6,1.5-5.9,1.5c-2.3,0-4.2-0.5-5.9-1.5c-1.7-1-3.1-2.4-4.2-4.1c-1.1-1.7-1.9-3.6-2.5-5.9c-0.5-2.2-0.8-4.5-0.8-6.9c0-2.4,0.3-4.7,0.8-6.9c0.5-2.2,1.4-4.2,2.5-5.8c1.1-1.7,2.5-3,4.2-4.1c1.7-1,3.6-1.5,5.9-1.5C515.2,963.4,517.2,963.9,518.9,965z M516.2,993.4c0.9-0.7,1.7-1.6,2.3-2.7c0.6-1.1,1-2.5,1.3-4c0.3-1.5,0.4-3.2,0.4-4.9s-0.1-3.4-0.4-4.9c-0.3-1.5-0.7-2.9-1.3-4c-0.6-1.1-1.3-2.1-2.3-2.7c-0.9-0.7-2-1-3.2-1c-1.2,0-2.3,0.3-3.2,1c-0.9,0.7-1.7,1.6-2.3,2.7c-0.6,1.1-1.1,2.5-1.4,4c-0.3,1.5-0.5,3.2-0.5,4.9s0.1,3.4,0.5,4.9c0.3,1.5,0.8,2.9,1.4,4c0.6,1.1,1.4,2.1,2.3,2.7c0.9,0.7,2,1,3.2,1C514.2,994.4,515.3,994.1,516.2,993.4z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M549.5,965c1.7,1,3,2.4,4.1,4.1c1.1,1.7,1.9,3.6,2.5,5.8c0.5,2.2,0.8,4.5,0.8,6.9c0,2.4-0.3,4.7-0.8,6.9c-0.5,2.2-1.4,4.2-2.5,5.9c-1.1,1.7-2.5,3-4.1,4.1c-1.7,1-3.6,1.5-5.9,1.5c-2.3,0-4.2-0.5-5.9-1.5c-1.7-1-3.1-2.4-4.2-4.1c-1.1-1.7-1.9-3.6-2.5-5.9c-0.5-2.2-0.8-4.5-0.8-6.9c0-2.4,0.3-4.7,0.8-6.9c0.5-2.2,1.4-4.2,2.5-5.8c1.1-1.7,2.5-3,4.2-4.1c1.7-1,3.6-1.5,5.9-1.5C545.9,963.4,547.9,963.9,549.5,965z M546.9,993.4c0.9-0.7,1.7-1.6,2.3-2.7c0.6-1.1,1-2.5,1.3-4c0.3-1.5,0.4-3.2,0.4-4.9s-0.1-3.4-0.4-4.9c-0.3-1.5-0.7-2.9-1.3-4c-0.6-1.1-1.3-2.1-2.3-2.7c-0.9-0.7-2-1-3.2-1s-2.3,0.3-3.2,1c-0.9,0.7-1.7,1.6-2.3,2.7c-0.6,1.1-1.1,2.5-1.4,4c-0.3,1.5-0.5,3.2-0.5,4.9s0.1,3.4,0.5,4.9c0.3,1.5,0.8,2.9,1.4,4c0.6,1.1,1.4,2.1,2.3,2.7c0.9,0.7,2,1,3.2,1S546,994.1,546.9,993.4z' })
        ),
        _react2.default.createElement(
          'g',
          { className: 'jog jog_y_-10' },
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M467.7,893.9v5.8h-13.5v-5.8H467.7z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M500.9,873.9v35.5h-6.1V882l-6.2,5l-3.5-4.5l10.8-8.6H500.9z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M528,874.8c1.7,1,3,2.4,4.1,4.1c1.1,1.7,1.9,3.6,2.5,5.8c0.5,2.2,0.8,4.5,0.8,6.9c0,2.4-0.3,4.7-0.8,6.9c-0.5,2.2-1.4,4.2-2.5,5.9c-1.1,1.7-2.5,3-4.1,4.1c-1.7,1-3.6,1.5-5.9,1.5c-2.3,0-4.2-0.5-5.9-1.5c-1.7-1-3.1-2.4-4.2-4.1c-1.1-1.7-1.9-3.6-2.5-5.9c-0.5-2.2-0.8-4.5-0.8-6.9c0-2.4,0.3-4.7,0.8-6.9c0.5-2.2,1.4-4.2,2.5-5.8c1.1-1.7,2.5-3,4.2-4.1c1.7-1,3.6-1.5,5.9-1.5C524.4,873.3,526.4,873.8,528,874.8z M525.4,903.2c0.9-0.7,1.7-1.6,2.3-2.7s1-2.5,1.3-4c0.3-1.5,0.4-3.2,0.4-4.9c0-1.7-0.1-3.4-0.4-4.9c-0.3-1.5-0.7-2.9-1.3-4s-1.3-2.1-2.3-2.7c-0.9-0.7-2-1-3.2-1s-2.3,0.3-3.2,1c-0.9,0.7-1.7,1.6-2.3,2.7c-0.6,1.1-1.1,2.5-1.4,4c-0.3,1.5-0.5,3.2-0.5,4.9c0,1.7,0.1,3.4,0.5,4.9c0.3,1.5,0.8,2.9,1.4,4c0.6,1.1,1.4,2.1,2.3,2.7c0.9,0.7,2,1,3.2,1S524.4,903.9,525.4,903.2z' })
        ),
        _react2.default.createElement(
          'g',
          { className: 'jog jog_y_-1' },
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M467.7,799.4v5.8h-13.5v-5.8H467.7z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M500.9,779.3v35.5h-6.1v-27.4l-6.2,5l-3.5-4.5l10.8-8.6H500.9z' })
        ),
        _react2.default.createElement(
          'g',
          { className: 'jog jog_y_-0_1' },
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M467.7,705.1v5.8h-13.5v-5.8H467.7z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M505.5,685.9c1.7,1,3,2.4,4.1,4.1c1.1,1.7,1.9,3.6,2.5,5.8c0.5,2.2,0.8,4.5,0.8,6.9c0,2.4-0.3,4.7-0.8,6.9c-0.5,2.2-1.4,4.2-2.5,5.9s-2.5,3-4.1,4.1c-1.7,1-3.6,1.5-5.9,1.5c-2.3,0-4.2-0.5-5.9-1.5c-1.7-1-3.1-2.4-4.2-4.1c-1.1-1.7-1.9-3.6-2.5-5.9c-0.5-2.2-0.8-4.5-0.8-6.9c0-2.4,0.3-4.7,0.8-6.9c0.5-2.2,1.4-4.2,2.5-5.8c1.1-1.7,2.5-3,4.2-4.1c1.7-1,3.6-1.5,5.9-1.5C501.9,684.4,503.9,684.9,505.5,685.9z M502.9,714.4c0.9-0.7,1.7-1.6,2.3-2.7c0.6-1.1,1-2.5,1.3-4c0.3-1.5,0.4-3.2,0.4-4.9s-0.1-3.4-0.4-4.9s-0.7-2.9-1.3-4c-0.6-1.1-1.3-2.1-2.3-2.7c-0.9-0.7-2-1-3.2-1s-2.3,0.3-3.2,1c-0.9,0.7-1.7,1.6-2.3,2.7c-0.6,1.1-1.1,2.5-1.4,4c-0.3,1.5-0.5,3.2-0.5,4.9s0.1,3.4,0.5,4.9c0.3,1.5,0.8,2.9,1.4,4c0.6,1.1,1.4,2.1,2.3,2.7c0.9,0.7,2,1,3.2,1S502,715.1,502.9,714.4z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M518.8,714.2c0.8-0.8,1.7-1.2,2.8-1.2c1.1,0,2.1,0.4,2.8,1.2c0.8,0.8,1.2,1.7,1.2,2.8c0,1.1-0.4,2.1-1.2,2.8c-0.8,0.8-1.7,1.2-2.8,1.2c-1.1,0-2.1-0.4-2.8-1.2c-0.8-0.8-1.2-1.7-1.2-2.8C517.6,716,518,715,518.8,714.2z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M544.9,685v35.5h-6.1v-27.4l-6.2,5l-3.5-4.5l10.8-8.6H544.9z' })
        ),
        _react2.default.createElement(
          'g',
          { className: 'jog jog_y_0_1' },
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M465.1,358.8v9.6H459v-9.6h-9v-5.7h9v-9.3h6.1v9.3h9v5.7H465.1z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M511.4,333.8c1.7,1,3,2.4,4.1,4.1c1.1,1.7,1.9,3.6,2.5,5.8c0.5,2.2,0.8,4.5,0.8,6.9c0,2.4-0.3,4.7-0.8,6.9c-0.5,2.2-1.4,4.2-2.5,5.9c-1.1,1.7-2.5,3-4.1,4.1c-1.7,1-3.6,1.5-5.9,1.5c-2.3,0-4.2-0.5-5.9-1.5c-1.7-1-3.1-2.4-4.2-4.1c-1.1-1.7-1.9-3.6-2.5-5.9c-0.5-2.2-0.8-4.5-0.8-6.9c0-2.4,0.3-4.7,0.8-6.9c0.5-2.2,1.4-4.2,2.5-5.8c1.1-1.7,2.5-3,4.2-4.1c1.7-1,3.6-1.5,5.9-1.5C507.8,332.3,509.7,332.8,511.4,333.8z M508.7,362.3c0.9-0.7,1.7-1.6,2.3-2.7c0.6-1.1,1-2.5,1.3-4c0.3-1.5,0.4-3.2,0.4-4.9c0-1.7-0.1-3.4-0.4-4.9c-0.3-1.5-0.7-2.9-1.3-4c-0.6-1.1-1.3-2.1-2.3-2.7c-0.9-0.7-2-1-3.2-1s-2.3,0.3-3.2,1c-0.9,0.7-1.7,1.6-2.3,2.7c-0.6,1.1-1.1,2.5-1.4,4c-0.3,1.5-0.5,3.2-0.5,4.9c0,1.7,0.2,3.4,0.5,4.9c0.3,1.5,0.8,2.9,1.4,4c0.6,1.1,1.4,2.1,2.3,2.7c0.9,0.7,2,1,3.2,1S507.8,363,508.7,362.3z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M524.6,362.1c0.8-0.8,1.7-1.2,2.8-1.2c1.1,0,2.1,0.4,2.8,1.2c0.8,0.8,1.2,1.7,1.2,2.8s-0.4,2.1-1.2,2.8c-0.8,0.8-1.7,1.2-2.8,1.2c-1.1,0-2.1-0.4-2.8-1.2c-0.8-0.8-1.2-1.7-1.2-2.8S523.8,362.9,524.6,362.1z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M550.7,332.9v35.5h-6.1V341l-6.2,5l-3.5-4.5l10.8-8.6H550.7z' })
        ),
        _react2.default.createElement(
          'g',
          { className: 'jog jog_y_1' },
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M464.1,258.8v9.6h-6.1v-9.6h-9v-5.7h9v-9.3h6.1v9.3h9v5.7H464.1z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M505.8,233v35.5h-6.1v-27.4l-6.2,5l-3.5-4.5l10.8-8.6H505.8z' })
        ),
        _react2.default.createElement(
          'g',
          { className: 'jog jog_y_10' },
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M464.1,172.2v9.6h-6.1v-9.6h-9v-5.7h9v-9.3h6.1v9.3h9v5.7H464.1z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M505.8,146.3v35.5h-6.1v-27.4l-6.2,5l-3.5-4.5l10.8-8.6H505.8z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M532.9,147.2c1.7,1,3,2.4,4.1,4.1c1.1,1.7,1.9,3.6,2.5,5.8c0.5,2.2,0.8,4.5,0.8,6.9c0,2.4-0.3,4.7-0.8,6.9c-0.5,2.2-1.4,4.2-2.5,5.9c-1.1,1.7-2.5,3-4.1,4.1c-1.7,1-3.6,1.5-5.9,1.5c-2.3,0-4.2-0.5-5.9-1.5c-1.7-1-3.1-2.4-4.2-4.1c-1.1-1.7-1.9-3.6-2.5-5.9c-0.5-2.2-0.8-4.5-0.8-6.9c0-2.4,0.3-4.7,0.8-6.9c0.5-2.2,1.4-4.2,2.5-5.8c1.1-1.7,2.5-3,4.2-4.1c1.7-1,3.6-1.5,5.9-1.5C529.3,145.7,531.3,146.2,532.9,147.2z M530.2,175.7c0.9-0.7,1.7-1.6,2.3-2.7c0.6-1.1,1-2.5,1.3-4c0.3-1.5,0.4-3.2,0.4-4.9c0-1.7-0.1-3.4-0.4-4.9c-0.3-1.5-0.7-2.9-1.3-4c-0.6-1.1-1.3-2.1-2.3-2.7c-0.9-0.7-2-1-3.2-1s-2.3,0.3-3.2,1c-0.9,0.7-1.7,1.6-2.3,2.7c-0.6,1.1-1.1,2.5-1.4,4c-0.3,1.5-0.5,3.2-0.5,4.9c0,1.7,0.1,3.4,0.5,4.9c0.3,1.5,0.8,2.9,1.4,4c0.6,1.1,1.4,2.1,2.3,2.7c0.9,0.7,2,1,3.2,1S529.3,176.4,530.2,175.7z' })
        ),
        _react2.default.createElement(
          'g',
          { className: 'jog jog_y_100' },
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M464.1,81.5v9.6h-6.1v-9.6h-9v-5.7h9v-9.3h6.1v9.3h9v5.7H464.1z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M505.8,55.7v35.5h-6.1V63.8l-6.2,5l-3.5-4.5l10.8-8.6H505.8z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M532.9,56.6c1.7,1,3,2.4,4.1,4.1c1.1,1.7,1.9,3.6,2.5,5.8c0.5,2.2,0.8,4.5,0.8,6.9c0,2.4-0.3,4.7-0.8,6.9c-0.5,2.2-1.4,4.2-2.5,5.9c-1.1,1.7-2.5,3-4.1,4.1c-1.7,1-3.6,1.5-5.9,1.5c-2.3,0-4.2-0.5-5.9-1.5c-1.7-1-3.1-2.4-4.2-4.1c-1.1-1.7-1.9-3.6-2.5-5.9c-0.5-2.2-0.8-4.5-0.8-6.9c0-2.4,0.3-4.7,0.8-6.9c0.5-2.2,1.4-4.2,2.5-5.8c1.1-1.7,2.5-3,4.2-4.1c1.7-1,3.6-1.5,5.9-1.5C529.3,55.1,531.3,55.6,532.9,56.6z M530.2,85c0.9-0.7,1.7-1.6,2.3-2.7s1-2.5,1.3-4c0.3-1.5,0.4-3.2,0.4-4.9c0-1.7-0.1-3.4-0.4-4.9c-0.3-1.5-0.7-2.9-1.3-4s-1.3-2.1-2.3-2.7c-0.9-0.7-2-1-3.2-1s-2.3,0.3-3.2,1c-0.9,0.7-1.7,1.6-2.3,2.7c-0.6,1.1-1.1,2.5-1.4,4s-0.5,3.2-0.5,4.9c0,1.7,0.1,3.4,0.5,4.9c0.3,1.5,0.8,2.9,1.4,4c0.6,1.1,1.4,2.1,2.3,2.7c0.9,0.7,2,1,3.2,1S529.3,85.7,530.2,85z' }),
          _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M563.6,56.6c1.7,1,3,2.4,4.1,4.1c1.1,1.7,1.9,3.6,2.5,5.8c0.5,2.2,0.8,4.5,0.8,6.9c0,2.4-0.3,4.7-0.8,6.9c-0.5,2.2-1.4,4.2-2.5,5.9c-1.1,1.7-2.5,3-4.1,4.1c-1.7,1-3.6,1.5-5.9,1.5c-2.3,0-4.2-0.5-5.9-1.5c-1.7-1-3.1-2.4-4.2-4.1c-1.1-1.7-1.9-3.6-2.5-5.9c-0.5-2.2-0.8-4.5-0.8-6.9c0-2.4,0.3-4.7,0.8-6.9c0.5-2.2,1.4-4.2,2.5-5.8c1.1-1.7,2.5-3,4.2-4.1c1.7-1,3.6-1.5,5.9-1.5C560,55.1,562,55.6,563.6,56.6z M560.9,85c0.9-0.7,1.7-1.6,2.3-2.7c0.6-1.1,1-2.5,1.3-4c0.3-1.5,0.4-3.2,0.4-4.9c0-1.7-0.1-3.4-0.4-4.9c-0.3-1.5-0.7-2.9-1.3-4c-0.6-1.1-1.3-2.1-2.3-2.7c-0.9-0.7-2-1-3.2-1s-2.3,0.3-3.2,1c-0.9,0.7-1.7,1.6-2.3,2.7c-0.6,1.1-1.1,2.5-1.4,4c-0.3,1.5-0.5,3.2-0.5,4.9c0,1.7,0.1,3.4,0.5,4.9c0.3,1.5,0.8,2.9,1.4,4c0.6,1.1,1.4,2.1,2.3,2.7c0.9,0.7,2,1,3.2,1S560,85.7,560.9,85z' })
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { fill: '#383535', d: 'M563.5,531.6L548,516.1c-0.8-0.8-1.7-1.1-2.7-1.1c-1,0-1.9,0.4-2.7,1.1c-0.8,0.8-1.1,1.7-1.1,2.7v7.7h-23.2v-23.2h7.7c1,0,2-0.4,2.7-1.1c0.8-0.8,1.1-1.7,1.1-2.7c0-1.1-0.4-2-1.1-2.7l-15.5-15.5c-0.8-0.8-1.7-1.1-2.7-1.1c-1,0-2,0.4-2.7,1.1l-15.5,15.5c-0.8,0.8-1.2,1.7-1.2,2.7c0,1,0.4,2,1.2,2.7c0.8,0.8,1.7,1.1,2.7,1.1h7.7v23.2h-23.2v-7.7c0-1-0.4-2-1.1-2.7c-0.8-0.8-1.7-1.1-2.7-1.1c-1,0-1.9,0.4-2.7,1.1l-15.5,15.5c-0.8,0.8-1.1,1.7-1.1,2.7c0,1,0.4,2,1.1,2.7l15.5,15.5c0.8,0.8,1.7,1.1,2.7,1.1c1.1,0,2-0.4,2.7-1.1c0.8-0.8,1.1-1.7,1.1-2.7V542h23.2v23.2H495c-1.1,0-2,0.4-2.7,1.2c-0.8,0.8-1.1,1.7-1.1,2.7c0,1,0.4,2,1.1,2.7l15.5,15.5c0.8,0.8,1.7,1.1,2.7,1.1c1,0,2-0.4,2.7-1.1l15.5-15.5c0.8-0.8,1.1-1.7,1.1-2.7c0-1.1-0.4-2-1.1-2.7c-0.8-0.8-1.7-1.2-2.7-1.2h-7.7V542h23.2v7.7c0,1,0.4,2,1.2,2.7c0.8,0.8,1.7,1.1,2.7,1.1c1,0,2-0.4,2.7-1.1l15.5-15.5c0.8-0.8,1.1-1.7,1.1-2.7C564.6,533.2,564.2,532.3,563.5,531.6z' })
          )
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement(_Polygon2.default, { fillColor: '#3C968D', endpoint: this.props.endpoint, points: '1117.4,153.5375 1317.4,153.5375 1317.4,29.3 1117.4,29.3', axis: 'z', amount: 10 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#59A29A', endpoint: this.props.endpoint, points: '1117.4,277.775 1317.4,277.775 1317.4,153.5375 1117.4,153.5375', axis: 'z', amount: 1 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#9FC0BD', endpoint: this.props.endpoint, points: '1117.4,402.0125 1317.4,402.0125 1317.4,277.775 1117.4,277.775', axis: 'z', amount: 0.1 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#9FC0BD', endpoint: this.props.endpoint, points: '1117.4,650.4875 1317.4,650.4875 1317.4,774.725 1117.4,774.725', axis: 'z', amount: -0.1 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#59A29A', endpoint: this.props.endpoint, points: '1117.4,774.725 1317.4,774.725 1317.4,898.9625 1117.4,898.9625', axis: 'z', amount: -1 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#3C968D', endpoint: this.props.endpoint, points: '1117.4,898.9625 1317.4,898.9625 1317.4,1023.2 1117.4,1023.2', axis: 'z', amount: -10 })
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement(_Polygon2.default, { fillColor: '#3C968D', endpoint: this.props.endpoint, points: '1417.4,153.5375 1617.4,153.5375 1617.4,29.3 1417.4,29.3', axis: 'e', amount: -20 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#59A29A', endpoint: this.props.endpoint, points: '1417.4,277.775 1617.4,277.775 1617.4,153.5375 1417.4,153.5375', axis: 'e', amount: -10 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#9FC0BD', endpoint: this.props.endpoint, points: '1417.4,402.0125 1617.4,402.0125 1617.4,277.775 1417.4,277.775', axis: 'e', amount: -2 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#9FC0BD', endpoint: this.props.endpoint, points: '1417.4,650.4875 1617.4,650.4875 1617.4,774.725 1417.4,774.725', axis: 'e', amount: 2 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#59A29A', endpoint: this.props.endpoint, points: '1417.4,774.725 1617.4,774.725 1617.4,898.9625 1417.4,898.9625', axis: 'e', amount: 10 }),
          _react2.default.createElement(_Polygon2.default, { fillColor: '#3C968D', endpoint: this.props.endpoint, points: '1417.4,898.9625 1617.4,898.9625 1617.4,1023.2 1417.4,1023.2', axis: 'e', amount: 20 })
        )
      )
    );
  }
}
exports.default = JogPanel;
//# sourceMappingURL=JogPanel.js.map
