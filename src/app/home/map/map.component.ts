import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Compiler, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit, OnDestroy {
  _map;

  @ViewChild('target', { read: ViewContainerRef }) target;
  @Input()
  set map(map) {
    if (!map) return;
    this._map = map;
    this.initMap(this._map);
  }
  get map() { return this._map };

  cmpRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }


  ngOnDestroy() {
    if (this.cmpRef) {
      this.target.clear();
      this.cmpRef.destroy();
    }
  }

  initMap(map) {
    if (this.cmpRef) this.cmpRef.destroy();

    const factory = this.componentFactoryResolver.resolveComponentFactory(map);   //生成一个component
    this.cmpRef = this.target.createComponent(factory)     // 将生成的component创建到容器视图中

    // 可通过 this.componentRef.instance 接口调用创建的组件
    // this.componentRef.instance.data = this._myData;

    // 也可以直接修改 @input
    // this.componentRef.instance.initData = this._initData;
    // @input() initData;

    // 监听动态创建的组件事件
    // this.componentRef.instance.createZone.subscribe(zone => console.log(zone));
    // 动态创建的组件
    // @output() createZone = new EventEmitter();

    // this.cmpRef.instance   这个对象可以直接调用动态创建出来的组件
    this.cdRef.detectChanges();

  }

  flyTo() {
    // [103.868564, 1.349383]
    this.cmpRef.instance.flyToPoint([103.868564, 1.349383]);
  }

}
