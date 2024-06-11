interface CustomEvent {
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    resource: string;
  }
  
  interface PatientRequest {
    id: number;
    name: string;
    date: Date;
    status: string;
  }
  
  class SharedState {
    private static instance: SharedState;
    availability: CustomEvent[] = [];
    patientRequests: PatientRequest[] = [];
  
    private constructor() {}
  
    public static getInstance(): SharedState {
      if (!SharedState.instance) {
        SharedState.instance = new SharedState();
      }
      return SharedState.instance;
    }
  }
  
  export default SharedState;
  