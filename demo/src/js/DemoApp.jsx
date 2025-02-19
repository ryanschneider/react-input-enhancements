import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Input from 'react-bootstrap/lib/Input';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Collapse from 'react-bootstrap/lib/Collapse';
import Static from 'react-bootstrap/lib/FormControls/Static';

import countries from './countries';
import pure from './pure';

import Autosize from 'Autosize';
import Autocomplete from 'Autocomplete';
import Combobox from 'Combobox';
import Mask from 'Mask';

import pkg from '../../../package.json';
import './bootstrap-input-inline.css';

const ValueInput1 = pure(({ value, onChange }) =>
  <Autosize defaultValue={value}
            onChange={e => onChange(e.target.value)}>
    <Input type='text'
           standalone
           groupClassName='inline-input'
           addonAfter={<Glyphicon glyph='star' />} />
  </Autosize>);

const ValueInput2 = pure(({ value, onChange }) =>
  <Autosize defaultValue={value}
            defaultWidth={100}
            onChange={e => onChange(e.target.value)}>
    <Input type='text'
           standalone
           groupClassName='inline-input'
           addonBefore={<Glyphicon glyph='asterisk' />} />
  </Autosize>);

const code1and2 = `
  This text has no default width:{' '}
  <Autosize defaultValue={value}
            onChange={e => onChange(e.target.value)}>
    <Input type='text'
           standalone
           groupClassName='inline-input'
           addonAfter={<Glyphicon glyph='star' />} />
  </Autosize>
  and this has 100px default width:{' '}
  <Autosize defaultValue={value}
            defaultWidth={100}
            onChange={e => onChange(e.target.value)}
            >
    <Input type='text'
           standalone
           groupClassName='inline-input'
           addonBefore={<Glyphicon glyph='asterisk' />} />
  </Autosize>
`;

const ValueInput3 = pure(({ value, onChange }) =>
  <Autocomplete defaultValue={value}
                options={countries}
                onChange={e => onChange(e.target.value)}>
    <Input type='text'
           label='Autocomplete:'
           labelClassName='col-xs-3'
           wrapperClassName='col-xs-6'
           placeholder='No Country' />
  </Autocomplete>);

const code3 = `
  <Autocomplete defaultValue={value}
                options={countries}
                onChange={e => onChange(e.target.value)}>
    <Input type='text'
           label='Autocomplete:'
           labelClassName='col-xs-3'
           wrapperClassName='col-xs-6'
           placeholder='No Country' />
  </Autocomplete>
`;

const ValueInput4 = pure(({ value, onChange }) =>
  <Input label='Combobox (Dropdown + Autocomplete):'
         labelClassName='col-xs-3'
         wrapperClassName='col-xs-6'>
    <Combobox defaultValue={value}
              options={countries}
              dropdownProps={{ style: { width: '100%' } }}
              onValueChange={onChange}
              onChange={e => onChange(e.target.value)}
              autocomplete>
      {inputProps =>
        <input {...inputProps}
               type='text'
               className={`${inputProps.className} form-control`}
               placeholder='No Country' />
      }
    </Combobox>
  </Input>);

const code4 = `
  <Input label='Combobox (Dropdown + Autocomplete):'
         labelClassName='col-xs-3'
         wrapperClassName='col-xs-6'>
    <Combobox defaultValue={value}
              options={countries}
              dropdownProps={{ style: { width: '100%' } }}
              onValueChange={onChange}
              onChange={e => onChange(e.target.value)}
              autocomplete>
      {inputProps =>
        <input {...inputProps}
               type='text'
               className={\`\$\{inputProps.className\} form-control\`\}
               placeholder='No Country' />
      }
    </Combobox>
  </Input>
`;

const ValueInput5 = pure(({ value, onChange }) =>
  <Input label='Combobox (Dropdown + Autosize):'
         labelClassName='col-xs-3'
         wrapperClassName='col-xs-6'>
    <Combobox defaultValue={value}
              options={countries}
              dropdownProps={{ style: { minWidth: '100%' } }}
              onValueChange={onChange}
              onChange={e => onChange(e.target.value)}
              autosize>
      {inputProps =>
        <input {...inputProps}
               type='text'
               className={`${inputProps.className} form-control`}
               placeholder='No Country' />
      }
    </Combobox>
  </Input>);

const code5 = `
  <Input label='Combobox (Dropdown + Autosize):'
         labelClassName='col-xs-3'
         wrapperClassName='col-xs-6'>
    <Combobox defaultValue={value}
              options={countries}
              dropdownProps={{ style: { minWidth: '100%' } }}
              onValueChange={onChange}
              onChange={e => onChange(e.target.value)}
              autosize>
      {inputProps =>
        <input {...inputProps}
               type='text'
               className={\`\$\{inputProps.className\} form-control\`\}
               placeholder='No Country' />
      }
    </Combobox>
  </Input>
`;

const ValueInput6 = pure(({ value, onChange }) =>
  <Input label='Combobox (Dropdown + Autosize + Autocomplete, defaultWidth=100):'
         labelClassName='col-xs-3'
         wrapperClassName='col-xs-6'>
    <Combobox defaultValue={value}
              options={[...countries]}
              defaultWidth={100}
              onValueChange={onChange}
              autosize
              autocomplete>
      {inputProps =>
        <input {...inputProps}
               type='text'
               className={`${inputProps.className} form-control`}
               placeholder='No Country' />
      }
    </Combobox>
  </Input>);

const code6 = `
  <Input label='Combobox (Dropdown + Autosize + Autocomplete, defaultWidth=100):'
         labelClassName='col-xs-3'
         wrapperClassName='col-xs-6'>
    <Combobox defaultValue={value}
              options={countries}
              defaultWidth={100}
              onValueChange={onChange}
              autosize
              autocomplete>
      {inputProps =>
        <input {...inputProps}
               type='text'
               className={\`\$\{inputProps.className\} form-control\`\}
               placeholder='No Country' />
      }
    </Combobox>
  </Input>
`;

const ValueInput7 = pure(({ value, onChange, onUnmaskedValueChange }) =>
  <Mask pattern='0000-0000-0000-0000'
        defaultValue={value}
        onChange={e => onChange(e.target.value)}
        onUnmaskedValueChange={onUnmaskedValueChange}
        style={{ fontFamily: 'monospace' }}>
    {inputProps =>
      <Autosize defaultWidth={100} {...inputProps}>
        <Input type='text'
               label='Mask + Autosize (credit card):'
               labelClassName='col-xs-3'
               wrapperClassName='col-xs-1'
               groupClassName='autosize-addon-input'
               addonAfter={<Glyphicon glyph='credit-card' />} />
      </Autosize>
    }
  </Mask>);

const code7 = `
  <Mask pattern='0000-0000-0000-0000'
        defaultValue={value}
        onChange={e => onChange(e.target.value)}
        onUnmaskedValueChange={onUnmaskedValueChange}
        style={{ fontFamily: 'monospace' }}>
    {inputProps =>
      <Autosize defaultWidth={100} {...inputProps}>
        <Input type='text'
               label='Mask + Autosize (credit card):'
               labelClassName='col-xs-3'
               wrapperClassName='col-xs-1'
               groupClassName='autosize-addon-input'
               addonAfter={<Glyphicon glyph='credit-card' />} />
      </Autosize>
    }
  </Mask>
`;

const ValueInput8 = pure(({ value, onChange, onUnmaskedValueChange }) =>
  <Mask pattern='+\ 7\ (000) 000-00-00'
        defaultValue={value}
        onChange={e => onChange(e.target.value)}
        onUnmaskedValueChange={onUnmaskedValueChange}
        style={{ fontFamily: 'monospace' }}>
    {inputProps =>
      <Autosize defaultWidth={100} {...inputProps}>
        <Input type='text'
               label='Mask + Autosize (phone number):'
               labelClassName='col-xs-3'
               wrapperClassName='col-xs-1'
               groupClassName='autosize-addon-input'
               addonAfter={<Glyphicon glyph='phone' />} />
      </Autosize>
    }
  </Mask>);

const code8 = `
  <Mask pattern='+\ 7\ (000) 000-00-00'
        defaultValue={value}
        onChange={e => onChange(e.target.value)}
        onUnmaskedValueChange={onUnmaskedValueChange}
        style={{ fontFamily: 'monospace' }}>
    {inputProps =>
      <Autosize defaultWidth={100} {...inputProps}>
        <Input type='text'
               label='Mask + Autosize (phone number):'
               labelClassName='col-xs-3'
               wrapperClassName='col-xs-1'
               groupClassName='autosize-addon-input'
               addonAfter={<Glyphicon glyph='phone' />} />
      </Autosize>
    }
  </Mask>
`;

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: 'value--Fiji',
      value7: null,
      unmaskedValue7: null,
      value8: null,
      unmaskedValue8: null,
      code1and2open: false,
      code3open: false,
      code4open: false,
      code5open: false,
      code6open: false,
      code7open: false,
      code8open: false
    };
  }

  componentDidMount() {
    window.setTimeout(this.setDelayedState, 200);
  }

  setDelayedState = () => {
    this.setState({ value4: 'value--Albania' });
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <PageHeader style={styles.header}>{pkg.name || '[[Package Name]]'}</PageHeader>
        <h5>{pkg.description || '[[Package Description]]'}</h5>
        <div style={styles.content}>
          <form className='form-horizontal'>
            <div className='form-group'>
              <div className='control-label col-xs-3'>Autosize (inline):</div>
              <div className='col-xs-6'>
                This text has no default width:{' '}
                <ValueInput1 value={this.state.value1}
                             onChange={this.handleValue1Change} />,
                and this has 100px default width:{' '}
                <ValueInput2 value={this.state.value2}
                             onChange={this.handleValue2Change} />
              </div>
            </div>
            {this.renderCode(code1and2, 'code1and2open')}
            <ValueInput3 value={this.state.value3}
                         onChange={this.handleValue3Change} />
            {this.renderCode(code3, 'code3open')}
            <ValueInput4 value={this.state.value4}
                         onChange={this.handleValue4Change} />
            {this.renderCode(code4, 'code4open')}
            <ValueInput5 value={this.state.value5}
                         onChange={this.handleValue5Change} />
            {this.renderCode(code5, 'code5open')}
            <ValueInput6 value={this.state.value6}
                         onChange={this.handleValue6Change} />
            {this.renderCode(code6, 'code6open')}
            <ValueInput7 value={this.state.value7}
                         onChange={this.handleValue7Change}
                         onUnmaskedValueChange={
                          value => this.setState({ unmaskedValue7: value })
                         } />
            <Static label='Unmasked value:'
                     labelClassName='col-xs-3'
                     wrapperClassName='col-xs-9'
                     value={this.state.unmaskedValue7} />
            {this.renderCode(code7, 'code7open')}
            <ValueInput8 value={this.state.value8}
                         onChange={this.handleValue8Change}
                         onUnmaskedValueChange={
                          value => this.setState({ unmaskedValue8: value })
                         } />
            <Static label='Unmasked value:'
                     labelClassName='col-xs-3'
                     wrapperClassName='col-xs-9'
                     value={this.state.unmaskedValue8} />
            {this.renderCode(code8, 'code8open')}
          </form>
        </div>
      </div>
    );
  }

  renderCode(code, key) {
    return (
      <div className='form-group'>
        <div className='col-xs-6 col-xs-offset-3'>
          <a role='button'
             onClick={() => this.setState({ [key]: !this.state[key] })}>Show code</a>
          <Collapse in={this.state[key]}>
            <pre>{code.replace(/^\n+/, '')}</pre>
          </Collapse>
        </div>
      </div>
    );
  }

  handleValue1Change = value => this.setState({ value1: value })

  handleValue2Change = value => this.setState({ value2: value })

  handleValue3Change = value => this.setState({ value3: value })

  handleValue4Change = value => this.setState({ value4: value })

  handleValue5Change = value => this.setState({ value5: value })

  handleValue6Change = value => this.setState({ value6: value })

  handleValue7Change = value => this.setState({ value7: value })

  handleValue8Change = value => this.setState({ value8: value })
}


const styles = {
  wrapper: {
    height: '100vh',
    width: '80%',
    margin: '0 auto'
  },
  header: {
  },
  content: {
    paddingTop: '20px'
  }
};
