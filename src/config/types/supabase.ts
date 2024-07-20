export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      lootboxes: {
        Row: {
          balance: number | null;
          balance_LOOT: number | null;
          balance_USDT: number | null;
          created_at: string;
          id: number;
          parent: string | null;
          receiver_id: number | null;
          receiver_updated_at: string | null;
          sender_id: number | null;
          sender_updated_at: string | null;
          status: string | null;
          Status_opened: string | null;
          uuid: string;
          walletID: string | null;
        };
        Insert: {
          balance?: number | null;
          balance_LOOT?: number | null;
          balance_USDT?: number | null;
          created_at?: string;
          id?: number;
          parent?: string | null;
          receiver_id?: number | null;
          receiver_updated_at?: string | null;
          sender_id?: number | null;
          sender_updated_at?: string | null;
          status?: string | null;
          Status_opened?: string | null;
          uuid?: string;
          walletID?: string | null;
        };
        Update: {
          balance?: number | null;
          balance_LOOT?: number | null;
          balance_USDT?: number | null;
          created_at?: string;
          id?: number;
          parent?: string | null;
          receiver_id?: number | null;
          receiver_updated_at?: string | null;
          sender_id?: number | null;
          sender_updated_at?: string | null;
          status?: string | null;
          Status_opened?: string | null;
          uuid?: string;
          walletID?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          created_at: string;
          first_name: string | null;
          ip_address: string | null;
          last_name: string | null;
          phone_number: string | null;
          telegram_id: number;
          username: string | null;
        };
        Insert: {
          created_at?: string;
          first_name?: string | null;
          ip_address?: string | null;
          last_name?: string | null;
          phone_number?: string | null;
          telegram_id: number;
          username?: string | null;
        };
        Update: {
          created_at?: string;
          first_name?: string | null;
          ip_address?: string | null;
          last_name?: string | null;
          phone_number?: string | null;
          telegram_id?: number;
          username?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      hash_encode: {
        Args: {
          "": number;
        };
        Returns: string;
      };
      id_decode: {
        Args: {
          "": string;
        };
        Returns: number[];
      };
      id_decode_once: {
        Args: {
          "": string;
        };
        Returns: number;
      };
      id_encode:
        | {
            Args: {
              "": number[];
            };
            Returns: string;
          }
        | {
            Args: {
              "": number;
            };
            Returns: string;
          };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
