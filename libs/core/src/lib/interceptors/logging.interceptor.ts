import { Observable, tap } from "rxjs";
import { CallHandler, ExecutionContext, Injectable, mixin, NestInterceptor } from "@nestjs/common";
import { ConsoleColor } from "../constants/consoleColor";

enum LogLevel {
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
  DEBUG = "debug",
}

const levelColorMapper = (level: LogLevel) => {
  switch (level) {
    case LogLevel.DANGER:
      return ConsoleColor.FRed;
    case LogLevel.WARNING:
      return ConsoleColor.FYellow;
    case LogLevel.INFO:
      return ConsoleColor.FBlue;
    case LogLevel.DEBUG:
      return ConsoleColor.FGreen;
    default: return ConsoleColor.FWhite;
  }
}

function LoggingInterceptorWrapper(level: LogLevel) {
  @Injectable()
  class LoggingControllerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
      const now = Date.now();
      return next.handle().pipe(tap(() => console.log(`${levelColorMapper(level)}%s\x1b[0m`, `Time: ${Date.now() - now}`)));
    }
  }

  return mixin(LoggingControllerInterceptor);
}

export {
  LogLevel,
  LoggingInterceptorWrapper
};
