/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, PureComponent } from 'react';

// import { SceneViewProps } from 'react-navigation';
// import { ContainerProps } from 'types';

// type BasePros = SceneViewProps;

type BasePros = any;

export abstract class BaseComponent<P = BasePros, S = any, SS = any> extends Component<P, S, SS> {}

export abstract class BasePureComponent<P = any, S = any, SS = any> extends PureComponent<
  P,
  S,
  SS
> {}
