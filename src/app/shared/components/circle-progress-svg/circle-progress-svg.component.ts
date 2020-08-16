import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

type vector2d = {
  x: number;
  y: number;
};

@Component({
  selector: 'app-circle-progress-svg',
  templateUrl: './circle-progress-svg.component.svg',
  styleUrls: ['./circle-progress-svg.component.scss'],
})
export class CircleProgressSvgComponent implements OnInit, AfterViewInit {
  @Input() simpleCount = 100; // 采样点数量
  @Input() radius = 125; // 半径，单位px
  @Input() outerColor = 'green'; // 外圈颜色
  @Input() innerColor = '#3498db';
  @Input() textColor = '#fff';
  @Input('initProgress') progress = 0.5; // 初始进度
  @Output() complete = new EventEmitter();
  private animationId: number | undefined;
  @ViewChild('outerCircle') outerCircleDOMRef!: ElementRef<SVGPolylineElement>;
  public outerWidth = 0.2 * this.radius; // 外圈宽度
  public innerRadius = 0.6 * this.radius; // 内圆半径
  private computedRadius = this.radius - this.outerWidth / 2; // 真实的外圈半径（因为外圈宽度各占一半）
  public center: vector2d = { x: this.radius, y: this.radius }; // 圆心
  private simplePoints: Array<vector2d> = [];
  serializedPoints = '';
  constructor() { }
  ngAfterViewInit(): void {
    this.outerCircleDOMRef.nativeElement.setAttribute('points', this.serializedPoints);
    this.animationId = setInterval(this.action, 10);
    this.action();
  }

  ngOnInit(): void {
    this.simpleIt();
  }
  // 采样，并初始化进度
  simpleIt(): void {
    this.simplePoints = [];
    const DELTA = (2 * Math.PI) / this.simpleCount;
    for (let i = -Math.PI / 2; i <= (3 / 2) * Math.PI + 2 * DELTA; i += DELTA) {
      this.simplePoints.push({
        x: this.center.x + this.computedRadius * Math.cos(i),
        y: this.center.y + this.computedRadius * Math.sin(i),
      });
    }
    const len = this.simplePoints.length;
    this.serializedPoints = this.simplePoints
      .slice(0, len * this.progress + 1)
      .map((p) => `${p.x},${p.y}`)
      .join(' ');
  }
  // 动画函数
  action = () => {
    this.progress += 0.01;
    const len = this.simplePoints.length;
    const tmp = this.simplePoints
      .slice(
        len * this.progress,
        len * this.progress + 1
      )
      .map((p) => `${p.x},${p.y}`)
      .join(' ');

    const outerDOM = this.outerCircleDOMRef.nativeElement;
    let points = outerDOM.getAttribute('points') || '';
    points += ` ${tmp}`;
    this.serializedPoints = points;
    outerDOM.setAttribute('points', points);
    if (this.progress >= 1) {
      clearInterval(this.animationId);
      this.complete.emit();
    }
  }
}
