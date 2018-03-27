export interface Action<Ttype, Tpayload> {
  readonly type: Ttype;
  readonly payload: Tpayload;
}
