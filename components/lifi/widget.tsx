import type { Route } from "@lifi/sdk";
import type {
  RouteExecutionUpdate,
  RouteHighValueLossUpdate,
} from "@lifi/widget";
import { useWidgetEvents, WidgetEvent, LiFiWidget } from "@lifi/widget";
import { useEffect, useState } from "react";

export const Widget = () => {
  const widgetEvents = useWidgetEvents();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onRouteExecutionStarted = (route: Route) => {
      console.log("onRouteExecutionStarted fired.");
    };
    const onRouteExecutionUpdated = (update: RouteExecutionUpdate) => {
      console.log("onRouteExecutionUpdated fired.");
    };
    const onRouteExecutionCompleted = (route: Route) => {
      console.log("onRouteExecutionCompleted fired.");
    };
    const onRouteExecutionFailed = (update: RouteExecutionUpdate) => {
      console.log("onRouteExecutionFailed fired.");
    };
    const onRouteHighValueLoss = (update: RouteHighValueLossUpdate) => {
      console.log("onRouteHighValueLoss continued.");
    };

    widgetEvents.on(WidgetEvent.RouteExecutionStarted, onRouteExecutionStarted);
    widgetEvents.on(WidgetEvent.RouteExecutionUpdated, onRouteExecutionUpdated);
    widgetEvents.on(
      WidgetEvent.RouteExecutionCompleted,
      onRouteExecutionCompleted
    );
    widgetEvents.on(WidgetEvent.RouteExecutionFailed, onRouteExecutionFailed);
    widgetEvents.on(WidgetEvent.RouteHighValueLoss, onRouteHighValueLoss);

    return () => widgetEvents.all.clear();
  }, [widgetEvents]);

  return (
    mounted && (
      <LiFiWidget
        config={{
          variant: "wide",
          theme: {
            container: {
              borderRadius: "16px",
            },
          },
          // fee: 0.04,
          insurance: true,
          toChain: 1151111081099710,
          appearance: "dark",
          hiddenUI: ["appearance", "poweredBy"],
        }}
        integrator="gmeonsol"
      />
    )
  );
};
