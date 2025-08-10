import { Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Todo } from "./TodoApp";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const TodoItem = ({ todo, onToggle, onDelete, className, style }: TodoItemProps) => {
  return (
    <div 
      className={cn(
        "group bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-sm",
        "transition-all duration-300 hover:shadow-md hover:bg-todo-card-hover/90",
        "hover:scale-[1.02] hover:-translate-y-1",
        todo.completed && "bg-todo-completed/90",
        className
      )}
      style={style}
    >
      <div className="flex items-center gap-4">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center",
            "transition-all duration-300 hover:scale-110",
            todo.completed 
              ? "bg-success border-success text-success-foreground animate-bounce-in"
              : "border-border hover:border-primary bg-background/50"
          )}
        >
          {todo.completed && (
            <Check className="w-4 h-4 animate-check" strokeWidth={3} />
          )}
        </button>

        {/* Todo Text */}
        <div className="flex-1 min-w-0">
          <p className={cn(
            "text-sm font-medium transition-all duration-300",
            todo.completed 
              ? "line-through text-muted-foreground" 
              : "text-card-foreground"
          )}>
            {todo.text}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {todo.createdAt.toLocaleDateString()}
          </p>
        </div>

        {/* Delete Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(todo.id)}
          className={cn(
            "w-8 h-8 p-0 rounded-lg text-muted-foreground hover:text-destructive",
            "hover:bg-destructive/10 transition-all duration-200",
            "opacity-0 group-hover:opacity-100 hover:scale-110"
          )}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};