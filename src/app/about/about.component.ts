import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  concat,
  from,
  fromEvent,
  interval,
  merge,
  noop,
  Observable,
  of,
  timer,
} from "rxjs";
import { concatMap, map, mergeMap, tap, toArray } from "rxjs/operators";
import { createHttpObservable } from "../common/util";
import { Course } from "../model/course";
import { Lesson } from "../model/lesson";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const http$ = createHttpObservable("/api/courses");
    const sub = http$.subscribe(console.log);
    setTimeout(() => sub.unsubscribe(), 0);
    //this.getMultipleRelationData().subscribe(console.log);
    //this.getCombinedData().subscribe(console.log);
  }

  // getCombinedData(): Observable<Course[]> {
  //   return this.getMultipleRelationData().pipe(
  //     mergeMap((res) =>
  //       from(res).pipe(
  //         mergeMap((course: Course) =>
  //           this.getSingleData(course.id).pipe(
  //             map((courseDetail) => ({ ...course, lessons: courseDetail }))
  //           )
  //         ),
  //         toArray()
  //       )
  //     )
  //   );
  // }

  // getSingleData(courseId): Observable<Lesson[]> {
  //   return createHttpObservable(`/api/lessons?courseId=${courseId}`).pipe(
  //     map((res) => res["payload"])
  //   );
  // }

  // getMultipleRelationData(): Observable<Course[]> {
  //   return createHttpObservable(`/api/courses`).pipe(
  //     map((res) => res["payload"])
  //   );
  // }
}
