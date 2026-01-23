export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      diet_adherence: {
        Row: {
          calorie_adherence_pct: number | null
          carbs_adherence_pct: number | null
          created_at: string
          diet_plan_id: string | null
          fats_adherence_pct: number | null
          id: string
          log_date: string
          overall_adherence_pct: number | null
          protein_adherence_pct: number | null
          total_calories: number
          total_carbs: number
          total_fats: number
          total_protein: number
          updated_at: string
          user_id: string
        }
        Insert: {
          calorie_adherence_pct?: number | null
          carbs_adherence_pct?: number | null
          created_at?: string
          diet_plan_id?: string | null
          fats_adherence_pct?: number | null
          id?: string
          log_date: string
          overall_adherence_pct?: number | null
          protein_adherence_pct?: number | null
          total_calories?: number
          total_carbs?: number
          total_fats?: number
          total_protein?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          calorie_adherence_pct?: number | null
          carbs_adherence_pct?: number | null
          created_at?: string
          diet_plan_id?: string | null
          fats_adherence_pct?: number | null
          id?: string
          log_date?: string
          overall_adherence_pct?: number | null
          protein_adherence_pct?: number | null
          total_calories?: number
          total_carbs?: number
          total_fats?: number
          total_protein?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "diet_adherence_diet_plan_id_fkey"
            columns: ["diet_plan_id"]
            isOneToOne: false
            referencedRelation: "user_diet_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      foods: {
        Row: {
          calories: number
          carbs: number
          category: string
          created_at: string
          fats: number
          fiber: number | null
          id: string
          name: string
          protein: number
          region: string
          serving_size: string
          sodium: number | null
          sugar: number | null
        }
        Insert: {
          calories?: number
          carbs?: number
          category: string
          created_at?: string
          fats?: number
          fiber?: number | null
          id?: string
          name: string
          protein?: number
          region: string
          serving_size?: string
          sodium?: number | null
          sugar?: number | null
        }
        Update: {
          calories?: number
          carbs?: number
          category?: string
          created_at?: string
          fats?: number
          fiber?: number | null
          id?: string
          name?: string
          protein?: number
          region?: string
          serving_size?: string
          sodium?: number | null
          sugar?: number | null
        }
        Relationships: []
      }
      lifestyle_quiz_results: {
        Row: {
          consistency_score: number
          created_at: string
          energy_answer: string
          flexibility_score: number
          id: string
          intensity_score: number
          pain_answer: string
          recommended_approach: string
          recovery_score: number
          schedule_answer: string
          sleep_answer: string
          stress_answer: string
          time_answer: string
          updated_at: string
          user_id: string
        }
        Insert: {
          consistency_score?: number
          created_at?: string
          energy_answer: string
          flexibility_score?: number
          id?: string
          intensity_score?: number
          pain_answer: string
          recommended_approach: string
          recovery_score?: number
          schedule_answer: string
          sleep_answer: string
          stress_answer: string
          time_answer: string
          updated_at?: string
          user_id: string
        }
        Update: {
          consistency_score?: number
          created_at?: string
          energy_answer?: string
          flexibility_score?: number
          id?: string
          intensity_score?: number
          pain_answer?: string
          recommended_approach?: string
          recovery_score?: number
          schedule_answer?: string
          sleep_answer?: string
          stress_answer?: string
          time_answer?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      nutrition_logs: {
        Row: {
          calories: number
          carbs: number
          created_at: string
          custom_food_name: string | null
          fats: number
          food_id: string | null
          id: string
          logged_at: string
          meal_type: string
          protein: number
          servings: number
          user_id: string
        }
        Insert: {
          calories: number
          carbs: number
          created_at?: string
          custom_food_name?: string | null
          fats: number
          food_id?: string | null
          id?: string
          logged_at?: string
          meal_type: string
          protein: number
          servings?: number
          user_id: string
        }
        Update: {
          calories?: number
          carbs?: number
          created_at?: string
          custom_food_name?: string | null
          fats?: number
          food_id?: string | null
          id?: string
          logged_at?: string
          meal_type?: string
          protein?: number
          servings?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "nutrition_logs_food_id_fkey"
            columns: ["food_id"]
            isOneToOne: false
            referencedRelation: "foods"
            referencedColumns: ["id"]
          },
        ]
      }
      user_diet_plans: {
        Row: {
          carbs_goal_pct: number
          created_at: string
          daily_calorie_goal: number
          end_date: string | null
          fats_goal_pct: number
          id: string
          is_active: boolean
          name: string
          protein_goal_pct: number
          start_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          carbs_goal_pct?: number
          created_at?: string
          daily_calorie_goal?: number
          end_date?: string | null
          fats_goal_pct?: number
          id?: string
          is_active?: boolean
          name: string
          protein_goal_pct?: number
          start_date?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          carbs_goal_pct?: number
          created_at?: string
          daily_calorie_goal?: number
          end_date?: string | null
          fats_goal_pct?: number
          id?: string
          is_active?: boolean
          name?: string
          protein_goal_pct?: number
          start_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
