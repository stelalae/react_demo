// import React from 'react';
import { React, BaseComponent } from '@/base';
import { connect } from 'dva';
import router from 'umi/router';

import { IModelGlobal } from '@/types';

import styles from '../index.css';

const mapStateToProps = (models: IModelGlobal) => {
  console.log('=== mapStateToProps', models);
  const { my } = models;
  return { app: my };
};

type ReduxProps = ReturnType<typeof mapStateToProps>;

class My extends BaseComponent<ReduxProps> {
  componentDidMount() {
    this.props.app;
  }

  onCount = () => {
    const { a } = this.props.app;
    this.props.dispatch({
      type: 'my/updateState',
      payload: { a: a + 1 },
    });
  };

  toHome = () => {
    router.push('/');
  };

  render() {
    const { a } = this.props.app;
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            To get started, edit <code>src/pages/index.js</code> and save to reload.
          </li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
          </li>
          <div onClick={this.onCount}>test {a}</div>
          <div onClick={this.toHome}>Goto Home</div>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(My);
